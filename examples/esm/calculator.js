// named imports
import {add} from "./lib/add.js"

// you can also import the default export like so
import defaultExport from "./lib/add.js"

// you can import the module as a namespace
import * as calculator from "./lib/add.js"


const args = process.argv.slice(2)

console.log(
    'Using named import:',
    add(args[0], args[1])
)
console.log(
    'Using default import:',
    defaultExport(args[0], args[1])
)
console.log(
    'Using namespace import:',
    calculator.add(args[0], args[1])
)
