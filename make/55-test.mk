# This file was generated by @liquid-labs/catalyst-builder-node. Refer to
# https://npmjs.com/package/@liquid-labs/catalyst-builder-node for further details

#####
# test rules
#####

SDLC_TEST_REPORT:=$(QA)/unit-test.txt
SDLC_TEST_PASS_MARKER:=$(QA)/.unit-test.passed
SDLC_COVERAGE_REPORTS:=$(QA)/coverage
TEST_TARGETS+=$(SDLC_TEST_REPORT) $(SDLC_TEST_PASS_MARKER) $(SDLC_COVERAGE_REPORTS)
PRECIOUS_TARGETS+=$(SDLC_TEST_REPORT)

SDLC_TEST_FILES_BUILT:=$(patsubst %.cjs, %.js, $(patsubst %.mjs, %.js, $(patsubst $(SRC)/%, $(TEST_STAGING)/%, $(SDLC_ALL_JS_FILES_SRC))))

$(SDLC_TEST_DATA_BUILT): $(TEST_STAGING)/%: $(SRC)/%
	@echo "Copying test data..."
	@mkdir -p $(dir $@)
	@cp $< $@

# Jest is not picking up the external maps, so we inline them for the test. (As of?)
$(SDLC_TEST_FILES_BUILT) &: $(SDLC_ALL_JS_FILES_SRC)
	rm -rf $(TEST_STAGING)
	mkdir -p $(TEST_STAGING)
	NODE_ENV=test $(SDLC_BABEL) \
		--config-file=$(SDLC_BABEL_CONFIG) \
		--out-dir=./$(TEST_STAGING) \
		--source-maps=inline \
		$(SRC)
	# remove because it's not really part of the test
	rm $(TEST_STAGING)/doc-extractor/doc-extractor.js

$(SDLC_TEST_PASS_MARKER) $(SDLC_TEST_REPORT) $(TEST_STAGING)/coverage &: package.json $(SDLC_TEST_FILES_BUILT) $(SDLC_TEST_DATA_BUILT)
	rm -rf $@
	mkdir -p $(dir $@)
	echo -n 'Test git rev: ' > $(SDLC_TEST_REPORT)
	git rev-parse HEAD >> $(SDLC_TEST_REPORT)
	( set -e; set -o pipefail; \
	  ( cd $(TEST_STAGING) && $(SDLC_JEST) \
	    --config=$(SDLC_JEST_CONFIG) \
	    --runInBand \
	    $(TEST) 2>&1 ) \
	  | tee -a $(SDLC_TEST_REPORT); \
	  touch $(SDLC_TEST_PASS_MARKER) )

$(SDLC_COVERAGE_REPORTS): $(SDLC_TEST_PASS_MARKER) $(TEST_STAGING)/coverage
	rm -rf $(SDLC_COVERAGE_REPORTS)
	mkdir -p $(SDLC_COVERAGE_REPORTS)
	cp -r $(TEST_STAGING)/coverage/* $(SDLC_COVERAGE_REPORTS)

#####
# end test
#####