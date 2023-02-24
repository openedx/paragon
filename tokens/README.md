# Design Tokens

This module is responsible for handling design tokens in Paragon, for rationale behind design tokens see [Scaling Paragon's styles architecture with design tokens](https://openedx.atlassian.net/wiki/spaces/BPL/pages/3630923811/Scaling+Paragon+s+styles+architecture+with+design+tokens)
and relevant ADR(TODO: add link when we merge an ADR). 

## Overview

We heavily rely on [style-dictionary](https://github.com/amzn/style-dictionary) package to build design tokens into various formats,
it is recommended to read their [documentation](https://amzn.github.io/style-dictionary/#/) as well to know more about the package since we mostly focus on Paragon specifics in this document.

All tokens are located in `src` directory and divided into three categories. We try to follow CTI token naming as described [here](https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item), but our schema does have some differences, see tokens files for an example of that

## Token modifications

Style dictionary allows you to apply certain modifications to tokens during build time, e.g. if you want to make some color darker without
manually calculating its value or trying to modify it with SASS functions after the variable has been built (note
that most SASS functions will not work with CSS variables as SASS does not know values during compile time).

All modifications need to be specified with `modify` key when describing a token, e.g.
```
{
  "value": "#D4F880",
  "modify": [{
    "type": "darken"
    "amount": 0.1
  }]
}
```
`modify` expects a list of modification to apply, each modification is specified with an object that carries necessary metadata, see examples below.

### Color transforms

Paragon uses [chroma-js](https://gka.github.io/chroma.js/) library to perform color modifications. Some of the most common examples are:

1. `darken` – change lightness of a color (same behaviour as in respective SASS function), e.g.
    ```
    {
      "value": "#D4F880",
      "modify": [{
        "type": "darken"
        "amount": 0.1
      }]
    }
    ```
    outputs `#CFF37B` value

2. `mix` – mix two colors with specific ratio (same behaviour as in respective SASS function), e.g.
   ```
   {
     "value": "#0A3055",
     "modify": [
       {
         "type": "mix",
         "otherColor": "#FFF",
         "amount": "0.6"
       }
     ]
   }
   ```
   outputs `#9DACBB` value

3. `color-yiq` – [Bootstrap's color contrast function](https://getbootstrap.com/docs/4.0/getting-started/theming/#color-contrast) that outputs black (defaults to `#454545`) or white (defaults to `#FFF`) color depending on the specified base color, e.g.
   ```
   {
     "value": "#0A3055",
     "modify": [{ "type": "color-yiq" }]
   }
   ```
   outputs `#454545`

Generally every function from `chroma-js` that has similar signature to `darken` function (i.e., first argument is color value and second is amount by which the color should be changed) can be applied to color tokens the same way as `darken` is applied, functions with other signatures are not currently supported except for the `mix`.

### Other transforms

Currently, only one other transform is supported – `str-replace`, that replaces some string with another one across the whole token value, common usage is for values that represent an SVG image

```
{
  "value": "url("data:image/svg+xml,<svg><path d='somesvg' fill='{color.primary.base.value}'/></svg>\")",
  "modify": [{
    "type": "str-replace",
    "toReplace": "#",
    "replaceWith": "%23"
  }]
}
```
Without `str-replace` the resulting value would be `url("data:image/svg+xml,<svg><path d='somesvg' fill='#0A3055'/></svg>\"`, note that fill color starts with `#` symbol which would cause image to render invalid color, by using `str-replace` fill would become `%230A3055` and the image would render correctly.

## Outputting references

By default, tokens keep references in the output, meaning having such tokens structure
```
{
  "color": {
    "green": { "value": "#178253" },
    "success": { "value": "{color.green.value}" }
}
```
the outputted values will be
```
--pgn-color-green: #178253,
--pgn-color-success: var(--pgn-color-green)
```
which is usually fine, but you might want to disable this behaviour for some tokens.

Style dictionary uses a simple algorithm while outputting references, i.e. it checks whether outputted value contains any known tokens and replaces them with references to that token, e.g.
if you have token with value `url("data:image/svg+xml,<svg><path d='somesvg' fill='{color.green.value}'/></svg>\")` then style dictionary would transform it into
`url("data:image/svg+xml,<svg><path d='somesvg' fill='var(--pgn-color-green)'/></svg>\")` which will obviously not work when rendered, and you get broken SVG.

To disable this feature for specific token use `outputReferences` flag, e.g.
```
{
  "value": "url("data:image/svg+xml,<svg><path d='somesvg' fill='{color.green.value}'/></svg>\")",
  "outputReferences": false,
  "modify": [{
    "type": "str-replace",
    "toReplace": "#",
    "replaceWith": "%23"
  }]
}
```
this will correctly output `url("data:image/svg+xml,<svg><path d='somesvg' fill='%23178253'/></svg>")`

## Utility Classes

Style Dictionary is also able to generate CSS utility classes using design tokens, although currently it is not very-well supported, and you might be better off to just hardcode CSS classes without using Style Dictionary.
Nevertheless, in some cases it might be useful.

The configuration to do build CSS classes lives in `src/utilities` directory in JSON files, let's take `color.json` as an example and see what it does. Its contents should look something like this:
```
{
  "utilities": [
    {
      "filters": {
        "category": ["color"],
        "type": ["gray", "primary", "secondary", "brand", "success", "info", "warning", "danger", "light", "dark", "accent"],
        "item": ["base", "100", "200", "300", "400", "500", "600", "700", "800", "900", "a", "b"]
      },
      "utilityFunctionsToApply": ["bgVariant", "textEmphasisVariant", "borderColor"]
    }
  ]
}
```
Namely, this is a JSON object with only one key (`utilities`, this is how Style Dictionary knows that this file is used for generating utility classes)
and one value which is an array of objects that describe how to generate classes and which tokens to use.
Each such object is composed of 2 keys:
 - `utilityFunctionsToApply`, which is an array of strings, these strings are the names of functions that will
   generate utility classes based on tokens. These functions must be defined in `css-utilities.js` module and must follow 
   the same signature - accept `token` object as its only argument and output CSS class as a string (see any of `bgVariant`, `textEmphasisVariant`, `borderColor` functions for an example)
 - `filters`, which is an object that describes which tokens will be passed as an argument to functions provided by `utilityFunctionsToApply`.
   The keys in this object are the attributes of a `token` object and values are arrays of valid values that tokens will be filtered against.
   For list of possible keys see https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item

Basically, this file tells Style Dictionary to generate utility classes using `["bgVariant", "textEmphasisVariant", "borderColor"]`
functions from tokens that are of `color` category and theirs `type` is one of `["gray", "primary", ...]`
and `item` is one of `["base", "100", "200", ...]`.

If you want to generate additional utility classes you need to add a similar JSON file to `src/utilities` directory.
