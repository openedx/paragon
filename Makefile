build:
	rm -rf ./dist
	tsc --emitDeclarationOnly
	./node_modules/.bin/babel src --extensions ".js,.jsx,.ts,.tsx" --out-dir dist --source-maps --ignore **/*.test.jsx,**/__mocks__,**/__snapshots__,**/setupTest.js --copy-files
	# --copy-files will bring in everything else that wasn't processed by babel. Remove what we don't want.
	rm -rf dist/**/*.test.jsx
	rm -rf dist/**/__snapshots__
	rm -rf dist/__mocks__
	rm -rf dist/setupTest.js
	node build-scss.js
