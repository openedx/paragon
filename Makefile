.PHONY: build
build:
	rm -rf ./dist
	tsc --project tsconfig.build.json
	rm icons/es5/index.d.ts  # We don't need this; not sure how to tell tsc not to generate it
	./node_modules/.bin/babel src --config-file ./babel.config.json --out-dir dist --source-maps --ignore **/*.d.ts,**/*.test.jsx,**/*.test.tsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files --extensions ".ts,.tsx,.jsx"
	# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	find ./dist -name "tests" -type d -prune -exec rm -rf "{}" \; # delete tests directories
	find ./dist -name "*.test.*" -delete # delete other tests files that weren't in tests directories
	find ./dist \( -name "*.md" -o -name "*.mdx" \) -delete # delete markdown file
	rm -rf dist/**/__snapshots__
	rm -rf dist/__mocks__
	rm -rf dist/setupTest.js
	./bin/paragon-scripts.js build-scss

export TRANSIFEX_RESOURCE = paragon
transifex_langs = "ar,ca,es_419,fr,he,id,ko_KR,pl,pt_BR,ru,th,uk,zh_CN,es_AR,es_ES,pt_PT,tr_TR,it_IT"
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
pull_translations: | requirements
	tx pull -t -f --mode reviewed --languages=$(transifex_langs)
	# compile files with translated strings to KEYVALUEJSON format which react-intl understands...
	npm run-script i18n_compile

# This target is used by Travis.
validate-no-uncommitted-package-lock-changes:
	# Checking for package-lock.json changes...
	git diff --exit-code package-lock.json
