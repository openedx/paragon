#!/usr/bin/env node

/**
 * Source: https://github.com/openedx/frontend-platform/blob/master/src/i18n/scripts/transifex-utils.js
 *
 * Duplicating this file from `@edx/frontend-platform` as we cannot install that package in
 * this repository due to peer dependency issues.
 */

const fs = require('fs');
const glob = require('glob');
const path = require('path');

const loggingPrefix = path.basename(`${__filename}`); // the name of this JS file

/*
 * See the Makefile for how the required hash file is downloaded from Transifex.
 */

/*
 * Expected input: a directory, possibly containing subdirectories, with .json files.  Each .json
 * file is an array of translation triplets (id, description, defaultMessage).
 *
 *
 */
function gatherJson(dir) {
  const ret = [];
  const files = glob.sync(`${dir}/**/*.json`);

  files.forEach((filename) => {
    const messages = JSON.parse(fs.readFileSync(filename));
    ret.push(...messages);
  });
  return ret;
}

// the hash file returns ids whose periods are "escaped" (sort of), like this:
// "key": "profile\\.sociallinks\\.social\\.links"
// so our regular messageIds won't match them out of the box
function escapeDots(messageId) {
  return messageId.replace(/\./g, '\\.');
}

const jsonDir = process.argv[2];
const messageObjects = gatherJson(jsonDir);

process.stdout.write(`${loggingPrefix}: message object contents: ${JSON.stringify(messageObjects, null, 2)}`);

if (messageObjects.length === 0) {
  process.exitCode = 1;
  throw new Error('Found no messages');
}

// prepare to handle the translator notes
const bashScriptsPath = './node_modules/@edx/reactifex/bash_scripts';

const hashFile = `${bashScriptsPath}/hashmap.json`;
process.stdout.write(`${loggingPrefix}: reading hash file ${hashFile}\n`);
const messageInfo = JSON.parse(fs.readFileSync(hashFile));

process.stdout.write(`${loggingPrefix}: hash file contents: ${JSON.stringify(messageInfo, null, 2)}`);

const outputFile = `${bashScriptsPath}/hashed_data.txt`;
process.stdout.write(`${loggingPrefix}: writing to output file ${outputFile}\n`);
fs.writeFileSync(outputFile, '');

messageObjects.forEach((message) => {
  const transifexFormatId = escapeDots(message.id);

  const info = messageInfo.find(mi => mi.key === transifexFormatId);
  if (info) {
    fs.appendFileSync(outputFile, `${info.string_hash}|${message.description}\n`);
  } else {
    process.stdout.write(`${loggingPrefix}: string ${message.id} does not yet exist on transifex!\n`);
  }
});
