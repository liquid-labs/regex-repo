# This file was generated by @liquid-labs/catalyst-builder-node. Refer to
# https://npmjs.com/package/@liquid-labs/catalyst-builder-node for further details

SDLC_JS_SELECTOR=\( -name "*.js" -o -name "*.cjs" -o -name "*.mjs" \)
SDLC_TEST_SELECTOR=\( -name "*.test.*js" -o -path "*/test/*" \)

# all source, non-test files (cli and lib)
SDLC_ALL_JS_FILES_SRC:=$(shell find $(SRC) $(SDLC_JS_SELECTOR) -not $(SDLC_DATA_SELECTOR) -type f)
SDLC_ALL_NON_TEST_JS_FILES_SRC:=$(shell find $(SRC) $(SDLC_JS_SELECTOR) -not $(SDLC_DATA_SELECTOR) -not $(SDLC_TEST_SELECTOR) -type f)
SDLC_JS_TEST_FILES_BUILT:=$(patsubst %.cjs, %.js, $(patsubst %.mjs, %.js, $(patsubst $(SRC)/%, test-staging/%, $(SDLC_ALL_JS_FILES_SRC))))
