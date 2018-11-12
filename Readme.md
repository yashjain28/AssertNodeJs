
# ipm package: AssertNodeJs

## Overview

Partial Implementation of NodeJs&#39; Assert library

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)


## Setup
Import Just the Code Library, Code Service just gives an exmaple of how to use it.
## Usage
Example Checkout the Code Service, once system is imported.

```javascript
function TestAssertNodeJs(req, resp) {
  var assert = AssertNodeJs();
  log(assert(1<4)); // Logs nothing, statement executes successfully.
  log('the next statement fails');
  log(assert(1>4)); // code exits with 'true == false' 
  resp.success('Success');
}
```
## API
The goal is to provide an API that is identical to [node's Assert API](https://nodejs.org/api/assert.html). It is modified from [Assert](https://github.com/browserify/commonjs-assert) library, which can be referenced when using this library. 

## Contributing
PRs are very welcome! The main way to contribute to `AssertNodeJs` is by porting features, bugfixes and tests from Node.js. Ideally, code contributions to this module are copy-pasted from Node.js and transpiled to ES5 (followed by some modifications), rather than reimplemented from scratch. Matching the Node.js code as closely as possible makes maintenance simpler when new changes land in Node.js. This module intends to provide exactly the same API as Node.js, so features that are not available in the core `Assert` module will not be accepted. 

If there is a difference in behaviour between Node.js's `Assert` module and this module, please open an issue!
