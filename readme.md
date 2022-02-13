# Javascript Modules

Javascript modules are a new browser feature allowing developers to package their reusable browser code into libraries. You may also see terms like `ES Modules` or `ESM,` referring to javascript modules.

See examples in the [esm](./examples/esm) folder.

Javascript modules are supported by [all major browsers](https://caniuse.com/es6-module), excluding internet explorer. Recently, `NodeJS` has also added support for Javascript modules making our code reusable both on the server and browser.

## Javascript Module Syntax (NodeJS and Browser Support)

### Exporting Code
Use the `export` keyword to export functions and variables
```javascript
// ./add.js

export function add(a, b) {
    return a + b
}

export const NUMBER_TWO = 2

export default add

```


### Importing Code
When importing code from a javascript module, you must include the file's extension.

```javascript
// importing by name
import {add} from "./add.js"

// importing the default (you can use whichever name you wish)
import customName from "./add.js" // where customName points to the add function

// import the whole library as a namespace (you may use whichever name you wish)
import * as calculator from "./add.js"

calculator.add // points to the add function
calculator.NUMBER_TWO // points to the NUMBER_TWO constant
calculator.default // points to the default export

```


## Common JS Module Syntax (NodeJS / Server Side Only)
See examples in the [cjs](./examples/cjs) folder.

### Exporting Code
Use the `module.exports` object to export functions and variables. The default export, in this case, is equal to the `module.exports` object. The convention is to name files with this legacy syntax using the `.cjs` extension.

```javascript
// ./add.cjs

export function add(a, b) {
    return a + b
}

module.exports = {
    add: add,
    NUMBER_TWO: 2,
}

```

### Importing Code
When importing code from a javascript module, you must include the file's extension.

```javascript
// importing by name
const {add} = require("./add.cjs")

// import the whole library as a namespace (you may use whichever name you wish)
const calculator = require("./add.cjs")

calculator.add // points to the add function
calculator.NUMBER_TWO // points to the NUMBER_TWO constant

```

## Using Javascript Modules in NodeJS

To use Javascript Modules in NodeJS, you must add the `"type": "module"` field to your `package.json` and NodeJS to use the new import/export syntax. Note, you will not have access to `require` in your modules unless you rename the module to `.cjs`.

```json
{
  "name": "esm-demo",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {
  }
}
```

## What Should You Do?

The Javascript ecosystem is still adjusting to the addition of Javascript Modules. There are many server library packages on NPM which still only use `commonjs` syntax, and if you try and use these packages with Javascript Modules, the code will fail. Many packages offer their libraries in both formats now, which makes it possible to adopt Javascript Modules. Try and use Javascript Modules as much as possible. Javascript Modules are the latest syntax. The ecosystem is heading in this direction (see a post by [sindresorhus](https://github.com/sindresorhus/meta/discussions/15) who has thousands of packages on npm people use). Be sure to double-check any libraries you use will support them, including the web browsers you are targeting. 

This tutorial does not cover every bit of syntax and gotcha. You will find many posts on the internet in more depth, such as this [MDN Article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules). 