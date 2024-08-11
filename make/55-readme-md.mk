README_MD:=README.md
README_MD_SRC:=$(shell find $(SRC)/doc -name "*.md") $(SDLC_ALL_NON_TEST_JS_FILES_SRC)
BUILD_TARGETS+=$(README_MD)

$(README_MD): $(README_MD_SRC)
	cp $(SRC)/doc/README.01.md $@
	npx jsdoc2md \
	  --files 'src/**/*' \
	  --global-index-format list \
	  --name-format \
	  --plugin dmd-readme-api \
	  >> $@
	cat $(SRC)/doc/README.02.md >> $@