import { readFileSync } from 'fs';

import template = require('es6-template-strings');

// import * as template from 'es6-template-strings';
// const template = require('es6-template-strings');

const data = JSON.parse(readFileSync('src/data.json', 'utf-8'));
const output = '-> The secret value is ${secret}';

console.log(template(output, data));
