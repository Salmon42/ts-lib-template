# ts-lib-template
Opinionated template for quickstart development of TypeScript/Vite library for SPA's or web apps.

---

## Scripts

* `yarn`: Installs dependencies
* `yarn clean`: In case of things breaking, remove all generated directories
	* You can update this procedure in `scripts/clean.ts`
* `yarn dev`: Runs minimal `index.html` page for temporary dev-tests
* `yarn lint`: Runs ESLint on `/lib`, `/scripts` and `/tests` sources
* `yarn test`: Runs Vitest on `/tests` spec files with unit test implementations
* `yarn build`: Runs production build
* `yarn doc`: Generates TypeDoc static HTML documentation into `/docs`
	* You can update the specifics of this procedure in `scripts/doc.ts`
* `yarn deploy`: Manually performs `npm publish` with some preparation steps
	* You can change the procedure's behavior in `scripts/deploy.ts`, although that should not be necessary.


## Used Dependencies
* None

## Used Dev Dependencies
* TypeScript
* ESLint (base, typescript, stylistic)
* TypeDoc with plugins
* Vite
* Vitest
* TSX - TS Node runtime
