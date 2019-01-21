# tstyping-test

This project was created to illustrate that use of `noImplicitAny`, which is part of `strict`, causes typescript to ignore the setting in `typeRoots`.

## Test

* `yarn run-proj`: Force `noImplicitAny` to `false` and program runs ok 
* `yarn run-proj-fail`: `strict` set to `true` and program fails

Similar action `yarn compile` and `yarn compile-fail` is setup for `tsc` command.

## Error Reported

`tsc` report the following error:

```
yarn run v1.12.3
$ tsc
src/index.ts:3:27 - error TS7016: Could not find a declaration file for module 'es6-template-strings'. '/Users/linm/dev/github/tstyping-test/node_modules/es6-template-strings/index.js' implicitly has an 'any' type.
  Try `npm install @types/es6-template-strings` if it exists or add a new declaration (.d.ts) file containing `declare module 'es6-template-strings';`

3 import template = require('es6-template-strings');
                            ~~~~~~~~~~~~~~~~~~~~~~


Found 1 error.

error Command failed with exit code 2.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
