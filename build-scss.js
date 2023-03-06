const sass = require('sass');
const fs = require('fs');
const { pathToFileURL } = require('url');

const compileStyleSheets = (path, output) => {
    return sass.compile(path, {
        style: output,
        sourceMap: true,
        sourceMapIncludeSources: true,
        importers: [{
            // An importer that redirects relative URLs starting with '~' to 'node_modules'.
            findFileUrl(url) {
                if (!url.startsWith('~')) return null;
                return new URL(url.substring(1), `${pathToFileURL('node_modules')}/node_modules`);
            }
        }]
    });
}

fs.writeFileSync(
    './dist/core.css',
    compileStyleSheets('./scss/core/core.scss').css
);

fs.writeFileSync(
    './dist/core.min.css',
    compileStyleSheets('./scss/core/core.scss', 'compressed').css
);

fs.appendFileSync(
    './dist/core.css',
        compileStyleSheets(`./css/core/custom-media-breakpoints.css`).css
);

fs.writeFileSync(
    './dist/core.css.map',
    JSON.stringify(compileStyleSheets('./scss/core/core.scss').sourceMap)
);

const compileThemeStyleSheets = (themeVariant) => {
    fs.writeFileSync(
        `./dist/${themeVariant}.css`,
        compileStyleSheets(`./css/${themeVariant}/variables.css`).css
    );

    fs.writeFileSync(
        `./dist/${themeVariant}.min.css`,
        compileStyleSheets(`./css/${themeVariant}/variables.css`, 'compressed').css
    );

    fs.appendFileSync(
        `./dist/${themeVariant}.css`,
        `\n${compileStyleSheets(`./css/${themeVariant}/utility-classes.css`).css}`
    );

    fs.writeFileSync(
        `./css/${themeVariant}/${themeVariant}.css`,
        compileStyleSheets(`./dist/${themeVariant}.css`).css
    );

    fs.writeFileSync(
        `./dist/${themeVariant}.css.map`,
        JSON.stringify(compileStyleSheets(`./dist/${themeVariant}.min.css`).sourceMap)
    );
};

const THEME_VARIANTS = ['light'];
THEME_VARIANTS.forEach(themeVariant => compileThemeStyleSheets(themeVariant));
