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