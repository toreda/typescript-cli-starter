

# `@toreda/demo-typescript-cli`

![CI](https://github.com/toreda/demo-typescript-cli/workflows/CI/badge.svg?branch=master) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=toreda_demo-typescript-cli&metric=coverage)](https://sonarcloud.io/dashboard?id=toreda_demo-typescript-cli) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=toreda_demo-typescript-cli&metric=alert_status)](https://sonarcloud.io/dashboard?id=toreda_demo-typescript-cli)

This repo contains a complete code 

# NPM Packages

## `dependencies` (`package.json`)
### [`@toreda/log`](https://www.npmjs.com/package/@toreda/log) `0.6.3`
TypeScript logger with small footprint & configurable transports.
**Uses**
* `gulpfile.ts`
* `@toreda/build-tools`
* `@toreda/strong-types`

---
### [`yargs`](https://www.npmjs.com/package/yargs) `17.1.1`
Parse command-line arguments.

## `devDependencies` (`package.json`)
Packages used only during development should be placed in`devDependencies`.

Install packages with the  `--dev` flag with yarn or the `--save-dev`  flag with NPM to install a package directly into `devDependencies`.

**With yarn:**
```bash
yarn install @toreda/types --dev
```
**With NPM**
```bash
npm install @toreda/types --save-dev
```
---

### [`@babel/core`](https://www.npmjs.com/package/@babel/core) `7.15.5`
Core Babel package needed to perform any Babel operations. The build script uses `babel` to transpile all TypeScript in the project before bundling the result. Jest also relies on `ts-jest` to run TypeScript test files, which relies on `@babel/core`

**Uses**
* `webpack.config.ts`
* `gulpfile.ts`
* Test files ending in **`.spec.ts`** in **`tests/`**.

**Docs**
* **[Official docs for @babel/core](https://babel.dev/docs/en/babel-core)**

---

### [`@babel/preset-env`](https://www.npmjs.com/package/@babel/preset-env) `7.15.6`
Adds presets to Babel environment.


**Uses**
* **`babel.config.json`**

**Docs**
* **[Official docs for @babel/preset-env](https://babel.dev/docs/en/babel-preset-env)**

---

### [`@babel/preset-typescript`](https://www.npmjs.com/package/@babel/preset-typescript) `7.15.0`
Adds TypeScript support to Babel env. Not strictly required but saves time by handling time consuming build edge cases.

**Uses**
* **`babel.config.json`**

**Docs**
* **[Official docs for @babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)**

---
### [`@babel/plugin-transform-typescript`](https://www.npmjs.com/package/@babel/plugin-transform-typescript) `7.15.4`
Required for `babel` to transform TypeScript constructors into vanilla JavaScript. Solves the incredibly confusing **`unexpected symbol`** runtime error which occurs when bundled code imports native TypeScript code from a bundled dependency.

**Uses**
* Activated by adding **`"@babel/transform-typescript"`** to the plugins Array in **`babel.config.json`**. 
	* *You may notice the plugin name `@babel/transform-typescript` in the babel config does not match the NPM package name `@babel/plugin-transform-typescript`. This is correct, and extremely confusing.*

**Docs**
* **[Official docs for @babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)**


---

### [`core-js`](https://www.npmjs.com/package/core-js) `3.18.0`
Adds Polyfills for browser features. Needed by `babel` during transpilation, based on compatibility target. `core-js` has two major branches: version 2 and version 3. Use the latest v3 `core-js` release whenever possible unless a project needs a specific v2 feature or API.

**Uses**
* **`core-js`** version specified  in **`babel.config.json`** 
---

### [`cpuprofile-webpack-plugin`](https://www.npmjs.com/package/cpuprofile-webpack-plugin) `3.18.0`
Generates CPU profiles from webpack builds to identify how CPU resources are used during builds. Optional and generally unnecessary for most builds. Useful for debugging to find out why some builds are very slow.

**Uses**
* **`core-js`** version specified  in **`babel.config.json`** 

---
### [`eslint`](https://www.npmjs.com/package/eslint) `4.0.2`
JavaScript & TypeScript linter which flags inconsistent formatting and styles.

**Uses**
* **`gulpfile.ts`**
* Running command **`yarn lint`** or **`yarn eslint`**
---

### [`gulp`](https://www.npmjs.com/package/gulp) `4.0.1`
Streaming task-based build system.

**Uses**
* **`gulpfile.ts`**
* Running command **`yarn build`** or **`yarn gulp`**

---

### [`gulp-eslint`](https://www.npmjs.com/package/gulp-eslint) `6.0.0`
Adds support for gulpfiles to call eslint functions directly in code without executing system commands. 

**Uses**
* **`gulpfile.ts`**
* Running command **`yarn build`** or **`yarn gulp`**
---

### [`@toreda/build-tools`](https://www.npmjs.com/package/@toreda/build-tools) `0.3.2`
Build scripts and Gulp pipelines for TypeScript project. Capable of building NPM packages, libraries, and command line apps. Acts as a Gulp wrapper, providing a single consistent build pipeline used by **`@toreda`** NPM projects. 

*Note: While this package can make your life easier it's not required for this package, but it's used in the default setup.*

**Uses**
* **`gulpfile.ts`**
 
---

### [`@toreda/prettier-config`](https://www.npmjs.com/package/@toreda/prettier-config) `1.0.1`
Ruleset config to enforce Toreda's organization-wide formatting standard. Any prettier ruleset can be used in your project and this is not required for your own projects. 

If you removed also remove this key from `package.json`:

```json
  "prettier": "@toreda/prettier-config",
```

**Uses**
* `package.json`

---

### [`@toreda/types`](https://www.npmjs.com/package/@toreda/types) `1.3.0`
Basic and common type definitions used in `@toreda` projects.

**Use**
* `@toreda/build-tools`

---

### [`@types/gulp`](https://www.npmjs.com/package/@types/gulp) `4.0.9`
Type definitions for Gulp.

**Uses**
* `gulpfile.ts`

---
### [`@types/node`](https://www.npmjs.com/package/@types/nodee) `16.9.4`
Type definitions for Node functions.

**Uses**
* Helpful types on import in any project `.ts` file.

---
### [`@types/webpack`](https://www.npmjs.com/package/@types/webpack) `5.53.0`
Type definitions for **`webpack`**. Package version generally always match the **`webpack`** package version to eliminate bugs and API discrepancies.

**Uses**
* **`webpack.config.ts`**

---
### [`@types/yargs`](https://www.npmjs.com/package/@types/yargs) `17.0.2`
Adds type support for **`yargs`** function calls. 




If you encounter build errors after installing `@types/yargs` it likely means code somewhere in the project did not respect `yargs` types.  

Each package export without type definitions becomes an implicit `any` type. This behavior mimics vanilla JavaScript and effectively disables type checking (this is bad). 

**Uses**
* **`src/cli.ts`**

---
### [`webpack`](https://www.npmjs.com/package/webpack) `5.53.0`
Type definitions for **`webpack`**.

**Uses**
* **`webpack.config.ts`**
---
### [`webpack-node-externals`](https://www.npmjs.com/package/webpack-node-externals) `3.0.0`
Adds support for defining external packages to use during build that are not included in bundle. Extremely useful when deploying bundles to platforms with libraries available. For example, AWS Lambda functions require `aws-sdk` during build and development, but the Lambda run-time environment makes `aws-sdk` to all Lambda functions. Using `webpack-node-externals` makes it easy to rely on `aws-sdk` during the build without adding redundant and unused code to the final bundle. 

*Excluding run-time packages is different than excluding devDependencies which may only used during build & bundling.*

**Uses**
* **`webpack.config.ts`**


---
### [`jest`](https://www.npmjs.com/package/jest) `27.2.1`
Intuitive testing framework with integrated code coverage and report formatting. 

**Why include this package?**
Jest is included in the project's **`package.json`** as a **`devDependency`**, rather than relying on the jest command being available for a couple important reasons. 

Using Jest from **`package.json`** has a few benefits:
* Package guaranteed available. No guessing whether it's installed or what version is installed.
* The project controls the jest version.
* TypeScript often requires additional types or packages to work with popular NPM packages. Jest + TypeScript currently needs **`ts-jest`**, **`ts-node`**, **`@babel/core`**, **`babel-jest`** and **`@types/jest`** (among others). Keeping package versions & package updates synchronized is tough task without surprise updates breaking testing.


**Uses**
* All **`.spec.ts`** test files in **`./tests`**.

**Docs**
* [Getting Started with Jest](https://jestjs.io/docs/getting-started)

### `ts-jest`
Run TypeScript test files directly from Jest.

**Uses**
* All **`.spec.ts`** files in **`tests/`**

# License

[MIT](LICENSE) &copy; Toreda, Inc.
