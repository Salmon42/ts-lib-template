import { publish } from './code/publish.js'
import { print } from './code/functions.js'
import { prepublish } from './code/prepublish.js'
import pkg from '../package.json' assert { type: "json" }

print(`Publishing project ${pkg.name} v${pkg.version}`)
const r1 = prepublish()
print(r1 ? 'Prepublish complete.' : 'Prepublish aborted.')

if (!r1) process.exit(1)

const r2 = publish()
print(r2 ? 'Publish complete' : 'Publish aborted.')
