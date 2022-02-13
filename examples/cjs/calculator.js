// importing commonjs from a javascript module. You must use the .cjs extension
import calculator from "./lib/add.cjs";

const args = process.argv.slice(2)

console.log(
    'Using named import:',
    calculator.add(args[0], args[1])
)
