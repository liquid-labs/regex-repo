# Copyright 2023 Liquid Labs, LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

BUILD_KEY:=regex-repo
SRC:=src
CATALYST_JS_LIB_SRC_PATH:=$(SRC)
CATALYST_NODE_PROJECT_LIB_ENTRY_POINT=$(CATALYST_JS_LIB_SRC_PATH)/index.js
# The following are set by the preamble when installed
# BUILD_KEY, SRC, CATALYST_JS_LIB_SRC_PATH, CATALYST_JS_CLI_SRC_PATH, CATALYST_JS_CLI, CATALYST_NODE_PROJECT_CLI_ENTRY_POINT, CATALYST_NODE_PROJECT_LIB_ENTRY_POINT
.DELETE_ON_ERROR:
.PHONY: all build lint lint-fix qa test

SHELL:=bash

default: build

DIST:=dist
DOCS:=docs
QA:=qa
TEST_STAGING:=test-staging

.PRECIOUS: $(QA)/unit-test.txt $(QA)/lint.txt

CATALYST_JS_BABEL:=npx babel
CATALYST_JS_JEST:=npx jest
CATALYST_JS_ROLLUP:=npx rollup
CATALYST_JS_ESLINT:=npx eslint

CATALYST_NODE_PROJECT_JS_SELECTOR=\( -name "*.js" -o -name "*.cjs" -o -name "*.mjs" \)
CATALYST_NODE_PROJECT_DATA_SELECTOR=\( -path "*/test/data/*"  -o -path "*/test/data-*/*" -o -path "*/test-data/*" \)

# all source files (cli and lib)
CATALYST_JS_ALL_FILES_SRC:=$(shell find $(SRC) $(CATALYST_NODE_PROJECT_JS_SELECTOR) -not $(CATALYST_NODE_PROJECT_DATA_SELECTOR))
CATALYST_JS_TEST_FILES_SRC:=$(shell find $(SRC) $(CATALYST_NODE_PROJECT_JS_SELECTOR) -not $(CATALYST_NODE_PROJECT_DATA_SELECTOR) -type f)
CATALYST_JS_TEST_FILES_BUILT:=$(patsubst %.cjs, %.js, $(patsubst %.mjs, %.js, $(patsubst $(SRC)/%, test-staging/%, $(CATALYST_JS_TEST_FILES_SRC))))
# all test data (cli and lib)
CATALYST_JS_TEST_DATA_SRC:=$(shell find $(SRC) -type f $(CATALYST_NODE_PROJECT_DATA_SELECTOR))
CATALYST_JS_TEST_DATA_BUILT:=$(patsubst $(SRC)/%, $(TEST_STAGING)/%, $(CATALYST_JS_TEST_DATA_SRC))
# lib specific files
CATALYST_JS_LIB_FILES_SRC:=$(shell find $(CATALYST_JS_LIB_SRC_PATH) $(CATALYST_NODE_PROJECT_JS_SELECTOR) -not $(CATALYST_NODE_PROJECT_DATA_SELECTOR) -not -name "*.test.js")
CATALYST_JS_LIB:=dist/$(BUILD_KEY).js
# cli speciifc files
ifdef CATALYST_JS_CLI_SRC_PATH
CATALYST_JS_CLI_FILES_SRC:=$(shell find $(CATALYST_JS_CLI_SRC_PATH) $(CATALYST_NODE_PROJECT_JS_SELECTOR) -not $(CATALYST_NODE_PROJECT_DATA_SELECTOR) -not -name "*.test.js")
endif

LINT_IGNORE_PATTERNS:=--ignore-pattern '$(DIST)/**/*' \
--ignore-pattern '$(TEST_STAGING)/**/*' \
--ignore-pattern '$(DOCS)/**/*'

# build rules
INSTALL_BASE:=$(shell npm explore @liquid-labs/catalyst-scripts-node-project -- pwd)

# We do this here so the 'rm -rf' to reset the built files will run before other targets (which may copy or create 
# files).
TEST_TARGETS:=$(CATALYST_JS_TEST_FILES_BUILT)

ifneq ($(wildcard make/*.mk),)
include make/*.mk
endif

ifdef CATALYST_JS_LIB_SRC_PATH
BUILD_TARGETS+=$(CATALYST_JS_LIB)

$(CATALYST_JS_LIB): package.json $(CATALYST_JS_LIB_FILES_SRC)
	JS_BUILD_TARGET=$(CATALYST_NODE_PROJECT_LIB_ENTRY_POINT) \
	  JS_OUT=$@ \
		$(CATALYST_JS_ROLLUP) --config $(INSTALL_BASE)/dist/rollup/rollup.config.mjs
endif

ifdef CATALYST_JS_CLI_SRC_PATH
BUILD_TARGETS+=$(CATALYST_JS_CLI)

# see DEVELOPER_NOTES.md 'CLI build'
$(CATALYST_JS_CLI): package.json $(CATALYST_JS_ALL_FILES_SRC)
	JS_BUILD_TARGET=$(CATALYST_NODE_PROJECT_CLI_ENTRY_POINT) \
	  JS_OUT=$@ \
	  JS_OUT_PREAMBLE='#!/usr/bin/env -S node --enable-source-maps' \
		$(CATALYST_JS_ROLLUP) --config $(INSTALL_BASE)/dist/rollup/rollup.config.mjs
	chmod a+x $@
endif


# test
UNIT_TEST_REPORT:=$(QA)/unit-test.txt
UNIT_TEST_PASS_MARKER:=$(QA)/.unit-test.passed

$(CATALYST_JS_TEST_DATA_BUILT): test-staging/%: $(SRC)/%
	@echo "Copying test data..."
	@mkdir -p $(dir $@)
	@cp $< $@

# Jest is not picking up the external maps, so we inline them for the test. (As of?)
$(CATALYST_JS_TEST_FILES_BUILT) &: $(CATALYST_JS_ALL_FILES_SRC)
	rm -rf $(TEST_STAGING)
	mkdir -p $(TEST_STAGING)
	NODE_ENV=test $(CATALYST_JS_BABEL) \
		--config-file=$(INSTALL_BASE)/dist/babel/babel.config.cjs \
		--out-dir=./$(TEST_STAGING) \
		--source-maps=inline \
		$(SRC)

# Tried to use '--testPathPattern=$(TEST_STAGING)' awithout the 'cd $(TEST_STAGING)', but it seemed to have no effect'
# '--runInBand' because some suites require serial execution (yes, it's "best practice" to have unit tests totally 
# independent, but in practice there are sometimes good reasons why it's useful or necessary to run sequentially); 
# also, it may be faster this way; see:
# https://stackoverflow.com/questions/43864793/why-does-jest-runinband-speed-up-tests
$(UNIT_TEST_PASS_MARKER) $(UNIT_TEST_REPORT): package.json $(CATALYST_JS_TEST_FILES_BUILT) $(CATALYST_JS_TEST_DATA_BUILT)
	@rm -f $@
	@mkdir -p $(dir $@)
	@echo -n 'Test git rev: ' > $(UNIT_TEST_REPORT)
	@git rev-parse HEAD >> $(UNIT_TEST_REPORT)
	@( set -e; set -o pipefail; \
		( cd $(TEST_STAGING) && $(CATALYST_JS_JEST) \
			--config=$(INSTALL_BASE)/dist/jest/jest.config.js \
			--runInBand \
			$(TEST) 2>&1 ) \
		| tee -a $(UNIT_TEST_REPORT); \
		touch $@ )

TEST_TARGETS+=$(UNIT_TEST_PASS_MARKER) $(UNIT_TEST_REPORT)

# lint rules
LINT_REPORT:=$(QA)/lint.txt
LINT_PASS_MARKER:=$(QA)/.lint.passed
$(LINT_PASS_MARKER) $(LINT_REPORT): $(CATALYST_JS_ALL_FILES_SRC)
	@mkdir -p $(dir $@)
	@echo -n 'Test git rev: ' > $(LINT_REPORT)
	@git rev-parse HEAD >> $(LINT_REPORT)
	@( set -e; set -o pipefail; \
		$(CATALYST_JS_ESLINT) \
			--config $(INSTALL_BASE)/dist/eslint/eslint.config.js \
			--ext .cjs,.js,.mjs,.cjs,.xjs \
			$(LINT_IGNORE_PATTERNS) \
			. \
			| tee -a $(LINT_REPORT); \
		touch $@ )

LINT_TARGETS+=$(LINT_PASS_MARKER) $(LINT_REPORT)

lint-fix:
	@( set -e; set -o pipefail; \
		$(CATALYST_JS_ESLINT) \
			--config $(INSTALL_BASE)/dist/eslint/eslint.config.js \
			--ext .js,.mjs,.cjs,.xjs \
			$(LINT_IGNORE_PATTERNS) \
			--fix . )


build: $(BUILD_TARGETS)

test: $(TEST_TARGETS)

lint: $(LINT_TARGETS)

qa: test lint

all: build