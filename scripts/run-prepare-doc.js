import fs from 'fs'
import { print } from './code/functions.js'

print('Packing README and CHANGELOG into single file for TypeDoc...')

const imagelink = 'Documentation Status: ![image](./coverage.svg)'
const readme = fs.readFileSync('README.md', 'utf-8')
const changelog = fs.readFileSync('CHANGELOG.md', 'utf-8')
const content = `${imagelink}\n\n${readme}\n\n${changelog}`

if (!fs.existsSync('tmp')) fs.mkdirSync('tmp')
fs.writeFileSync('tmp/doc-readme.md', content, {
	encoding: 'utf-8',
	flag: 'w',
})

print('Generated output in /tmp/doc-readme.md.')
