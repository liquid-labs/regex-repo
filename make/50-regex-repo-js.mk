# This file was generated by @liquid-labs/catalyst-builder-node. Refer to
# https://npmjs.com/package/@liquid-labs/catalyst-builder-node for further details

#####
# build dist/regex-repo.js
#####

SDLC_REGEX_REPO_JS:=$(DIST)/regex-repo.js
SDLC_REGEX_REPO_JS_ENTRY=$(SRC)/index.js
BUILD_TARGETS+=$(SDLC_REGEX_REPO_JS)

$(SDLC_REGEX_REPO_JS): package.json $(SDLC_ALL_NON_TEST_JS_FILES_SRC)
	JS_BUILD_TARGET=$(SDLC_REGEX_REPO_JS_ENTRY) \
	  JS_OUT=$@ \
	  $(SDLC_ROLLUP) --config $(SDLC_ROLLUP_CONFIG)

#####
# end dist/regex-repo.js
#####
