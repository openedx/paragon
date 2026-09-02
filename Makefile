.PHONY: clean
clean:
	rm -rf ./dist

.PHONY: build
build: clean
	tsc --project tsconfig.build.json
	rm icons/es5/index.d.ts  # We don't need this; not sure how to tell tsc not to generate it
	babel src --config-file ./babel.config.json --out-dir dist --source-maps --ignore **/*.d.ts,**/*.test.jsx,**/*.test.tsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files --extensions ".ts,.tsx,.jsx"
	# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	find ./dist -name "tests" -type d -prune -exec rm -rf "{}" \; # delete tests directories
	find ./dist -name "*.test.*" -delete # delete other tests files that weren't in tests directories
	find ./dist \( -name "*.md" -o -name "*.mdx" \) -delete # delete markdown file
	rm -rf dist/**/__snapshots__
	rm -rf dist/__mocks__
	rm -rf dist/setupTest.js
	./bin/paragon-scripts.js build-scss

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

# npm swallows errors
# see https://github.com/openedx/paragon/issues/3329
# 
# Instead of having this directly in the build-docs script
# in the top-level package.json, put it here so we can have
# a single source of truth and get proper error codes in CI
.PHONY: build-docs
build-docs:
	npm run build --workspace=www

# npm swallows errors
# see https://github.com/openedx/paragon/issues/3329
# 
# Instead of having this directly in the lint script
# in the top-level package.json, put it here so we can have
# a single source of truth and get proper error codes in CI
.PHONY: lint
lint:
	npm run stylelint && npm run eslint && npm run lint --workspaces --if-present

i18n.extract:
	# Pulling display strings from .jsx files into .json files...
	npm run-script i18n_extract

extract_translations: | requirements i18n.extract

# This target is used by Travis.
validate-no-uncommitted-package-lock-changes:
	# Checking for package-lock.json changes...
	git diff --exit-code package-lock.json
