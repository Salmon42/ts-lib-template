# ts-lib-template
Template for TypeScript/Vite library available for consumption by SPA's or web apps.

---

* `yarn create vite`
	* `Project name`: ts-lib-template
	* `Select a framework`: Vanilla
	* `Select a variant`: TypeScript

* Modify folders
	* Add `/lib`
	* Add `/types`
	* Remove `/src` & `public`
	* Move `src/vite-env.d.ts` to `/types`

* Create `vite.config.ts`

* Add dependencies:
	* dev `ts-node`
	* dev `@types/node`
	* dev [`vite-plugin-dts`](https://www.npmjs.com/package/vite-plugin-dts)

* Add `.editorconfig` file

* [WIP] Add ESLint
	* `yarn create @esling/config`
		* "How would you like to use ESLint?" → 'to check syntax, find problems, enforce code style' → `style`
		* "What type of modules does your project use?" → 'JS modules (import/export)' → `esm`
		* "Which framework does your project use?" → 'None of these' → `none`
		* "Does your project use TypeScript?" → 'Yes' → `typescript`
		* "Where does your code run?" → 'Browser && Node' → `browser, node`
		* "Which style guide do you want to follow?" → "Standard" → `standard`
			```
				The config that you've selected requires the following dependencies:
				eslint, globals, eslint-config-standard-with-typescript, @typescript-eslint/eslint-plugin@^6.4.0, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0 || ^16.0.0 , eslint-plugin-promise@^6.0.0, typescript@*, typescript-eslint, @eslint/eslintrc, @eslint/js
			```
	* Add [`vite-plugin-eslint`](https://www.npmjs.com/package/vite-plugin-eslint)
