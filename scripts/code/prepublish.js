//
// Prepublish script.
// Copies required files into /dist folder after building the library
//

import fs from 'fs'
const cwd = process.cwd()

/**
 * @param {string} filename 
 */
const copyFile = (filename) => {
	const srcpath = `${cwd}/${filename}`
	const destpath = `${cwd}/dist/${filename}`
	fs.copyFileSync(srcpath, destpath)
	console.log(`> Copied [${filename}]`)
}

/**
 * @returns {boolean} true if success
 */
export const prepublish = () => {
	if (!fs.existsSync(`${cwd}/dist`)) {
		console.log('> The /dist folder does not exist. Use \'yarn build\' first.')
		return false
	}
	else {
		copyFile('package.json')
		copyFile('README.md')
		copyFile('CHANGELOG.md')
		return true
	}
}
