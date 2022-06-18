build:
	rm -rf ./dist
	./node_modules/.bin/babel src --config-file ./babel.config.json --out-dir dist --source-maps --ignore **/*.test.jsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files
	# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	rm -rf dist/**/*.test.jsx
	rm -rf dist/**/__snapshots__
	rm -rf dist/__mocks__
	rm -rf dist/setupTest.js
	node build-scss.js

transifex_resource = paragon
tx_url1 = https://www.transifex.com/api/2/project/edx-platform/resource/$(transifex_resource)/translation/en/strings/
tx_url2 = https://www.transifex.com/api/2/project/edx-platform/resource/$(transifex_resource)/source/
transifex_langs = "ar,ca,es_419,fr,he,id,ko_KR,pl,pt_BR,ru,th,uk,zh_CN"
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

i18n.extract_comments:
	# Pulling comments from display strings in .jsx files into .json files...
	npm run-script i18n_extract_comments

extract_translations: | requirements i18n.extract i18n.extract_comments

# Despite the name, we actually need this target to detect changes in the incoming translated message files as well.
detect_changed_source_translations:
	# Checking for changed translations...
	git diff --exit-code $(i18n)

# Pushes translations to Transifex.  You must run make extract_translations first.
push_translations:
	# Pushing strings to Transifex...
	tx push -s
	# Pushing comments...
	./node_modules/@edx/reactifex/bash_scripts/get_hashed_strings.sh $(tx_url1)
	$(i18n)/transifex-utils.js $(i18n)/temp
	./node_modules/@edx/reactifex/bash_scripts/put_comments.sh $(tx_url2)

# Pulls translations from Transifex.
pull_translations:
	tx pull -f --mode reviewed --languages=$(transifex_langs)

# This target is used by Travis.
validate-no-uncommitted-package-lock-changes:
	# Checking for package-lock.json changes...
	git diff --exit-code package-lock.json
