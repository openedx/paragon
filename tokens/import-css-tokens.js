const fs = require('fs');

const content = fs.readFileSync('../scss/core/_tokens.scss', 'utf-8');
const variables = fs.readFileSync('../style-dictionary-build/css/variables.css', 'utf-8');

const rootRegex = /:root\s*\{[\s\S]*}/g;
const cleanVariables = rootRegex.exec(variables);
const cleanContent = content.replace(rootRegex, '');

const newContent = `${cleanVariables}${cleanContent}`;

fs.writeFileSync('../scss/core/_tokens.scss', newContent);
