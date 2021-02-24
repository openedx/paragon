# Analyzing Paragon Dependents

Generate Paragon component usage information within dependent projects with this command line tool. This tool uses babel to parse a series of javascript projects as an abstract syntax tree and walks through it to gather information about usage of Paragon components (version and file line numbers).

## Usage

Make sure you're in this `dependent-usage-analyzer` directory, and then:

```
npm install
```

```
npm run analyze path/to/projects -- --out path/to/output.json
```

**Note:** This tool assumes that any package.json file found represents the root directory of a project to analyze.
