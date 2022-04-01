build:
	rm -rf ./dist
	./node_modules/.bin/babel src --out-dir dist --source-maps --ignore **/*.test.jsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files
	# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	rm -rf dist/**/*.test.jsx
	rm -rf dist/**/__snapshots__
	rm -rf dist/__mocks__
	rm -rf dist/setupTest.js
	node build-scss.js

transifex_langs = "ar,fr,es_419,zh_CN"
i18n = ./src/i18n
transifex_input = $(i18n)/transifex_input.json

NPM_TESTS=build i18n_extract lint test

.PHONY: test
test: $(addprefix test.npm.,$(NPM_TESTS))  ## validate ci suite

.PHONY: test.npm.*
test.npm.%: validate-no-uncommitted-package-lock-changes
	test -d node_modules || $(MAKE) requirements
	npm run $(*)

.PHONY: requirements
requirements:  ## install ci requirements
	npm ci

i18n.extract:
	# Pulling display strings from .jsx files into .json files...
	npm run-script i18n_extract

extract_translations: | requirements i18n.extract

# Despite the name, we actually need this target to detect changes in the incoming translated message files as well.
detect_changed_source_translations:
	# Checking for changed translations...
	git diff --exit-code $(i18n)

# Pushes translations to Transifex.  You must run make extract_translations first.
push_translations:
	# Pushing strings to Transifex...
	tx push -s

# Pulls translations from Transifex.
pull_translations:
	tx pull -f --mode reviewed --language=$(transifex_langs)

# This target is used by Travis.
validate-no-uncommitted-package-lock-changes:
	# Checking for package-lock.json changes...
	git diff --exit-code package-lock.json
