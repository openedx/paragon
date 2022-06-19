build:
	rm -rf ./dist
	./node_modules/.bin/babel src --config-file ./babel.config.json --out-dir dist --source-maps --ignore **/*.test.jsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files
	# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	rm -rf dist/**/*.test.jsx
	rm -rf dist/**/__snapshots__
	rm -rf dist/__mocks__
	rm -rf dist/setupTest.js
	node build-scss.js

export TRANSIFEX_RESOURCE = paragon
transifex_langs = "ar,ca,es_419,fr,he,id,ko_KR,pl,pt_BR,ru,th,uk,zh_CN
i18n = ./src/i18n
transifex_utils = $(i18n)/transifex-utils.js
transifex_input = $(i18n)/transifex_input.json
transifex_temp = $(i18n)/temp

NPM_TESTS=build i18n_extract i18n_extract_comments lint test

.PHONY: test
test: $(addprefix test.npm.,$(NPM_TESTS))  ## validate ci suite

.PHONY: test.npm.*
test.npm.%: validate-no-uncommitted-package-lock-changes
	test -d node_modules || $(MAKE) requirements
	npm run $(*)

.PHONY: requirements
requirements:  ## install ci requirements
	npm ci

i18n.clean:
	rm -rf $(transifex_temp)

i18n.extract:
	# Pulling display strings from .jsx files into .json files...
	npm run-script i18n_extract

i18n.extract_comments:
	# Pulling comments from display strings in .jsx files into .json files...
	npm run-script i18n_extract_comments

extract_translations: | requirements i18n.clean i18n.extract i18n.extract_comments

# Despite the name, we actually need this target to detect changes in the incoming translated message files as well.
detect_changed_source_translations:
	# Checking for changed translations...
	git diff --exit-code $(i18n)

# Pushes translations to Transifex.  You must run make extract_translations first.
push_translations:
	# Displaying extracted strings...
	cat $(transifex_input)

	# Pushing strings to Transifex, temporarily with force...
	tx push -s -f

	# Pushing comments to Transifex...
	./node_modules/@edx/reactifex/bash_scripts/get_hashed_strings_v3.sh
	$(transifex_utils) $(transifex_temp)
	./node_modules/@edx/reactifex/bash_scripts/put_comments_v3.sh

# Pulls translations from Transifex.
pull_translations:
	tx pull -f --mode reviewed --languages=$(transifex_langs)

# This target is used by Travis.
validate-no-uncommitted-package-lock-changes:
	# Checking for package-lock.json changes...
	git diff --exit-code package-lock.json
