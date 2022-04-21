
![Toreda](https://content.toreda.com/logo/toreda-logo.png)


[![CI](https://img.shields.io/github/workflow/status/toreda/template-typescript-cli-app/CI?style=for-the-badge)](https://github.com/toreda/template-typescript-cli-app/actions) [![Coverage](https://img.shields.io/sonar/coverage/toreda_template-typescript-cli-app?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/project/activity?graph=coverage&id=toreda_template-typescript-cli-app) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/toreda_template-typescript-cli-app?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/dashboard?id=toreda_template-typescript-cli-app)

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/toreda/template-typescript-cli-app/master?style=for-the-badge)](https://github.com/toreda/template-typescript-cli-app/releases/latest) [![GitHub Release Date](https://img.shields.io/github/release-date/toreda/template-typescript-cli-app?style=for-the-badge)](https://github.com/toreda/template-typescript-cli-app/releases/latest) [![GitHub issues](https://img.shields.io/github/issues/toreda/template-typescript-cli-app?style=for-the-badge)](https://github.com/toreda/template-typescript-cli-app/issues)

 [![license](https://img.shields.io/github/license/toreda/template-typescript-cli-app?style=for-the-badge)](https://github.com/toreda/template-typescript-cli-app/blob/master/LICENSE)


&nbsp;

# `@toreda/template-typescript-cli-app`

Complete command line example app shell.

&nbsp;

# Yarn
We recommend `yarn` to manage project packages. Although you can use `npm install` to add packages, pick either `yarn` or `npm` to install/manage packages, and use only that command.

**Why choose one?**
**`yarn`** creates `yarn.lock` at the project root, while **`npm`** creates `package-lock.json`. These files separately and independently track specific package versions manages specific package versions. If both files exist, package versions in the project will be inconsistent.

# `package.json`

## Fixes & Workarounds

### Github NPM Package CVEs
Yarn `resolutions` support selective package version overrides used by the project & dependencies. The `resolutions` section includes several packages flagged by Github as security vulnerabilities.

# NPM Packages

## `dependencies` (`package.json`)
### [`@toreda/log`](https://www.npmjs.com/package/@toreda/log) `0.6.16`
TypeScript logger with small footprint & configurable transports.
**Uses**
* `gulpfile.ts`
* `@toreda/build-tools`
* `@toreda/strong-types`

---
### [`yargs`](https://www.npmjs.com/package/yargs) `17.4.1`
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

### [`@swc/core`](https://www.npmjs.com/package/@swc/core) `1.2.170`
Core package for the SWC (Speedy Web Compiler). The super-fast TypeScript & JavaScript compiler written in Rust. Significantly

**Uses**
* `gulpfile.ts`
* All `.spec.ts` test files where babel was previously used.

---

### [`@swc/jest`](https://www.npmjs.com/package/@swc/jest) `0.2.20`
SWC Plugin enabling Jest to use SWC to transform files instead of Babel.

**Uses**
* Anytime `yarn test` is run.
* Used as `transform` in `jest.config.js`.
* All `.spec.ts` test files where babel was previously used.

### [`eslint`](https://www.npmjs.com/package/eslint) `8.13.0`
JavaScript & TypeScript linter which flags inconsistent formatting and styles.

**Uses**
* **`gulpfile.ts`**
* Running command **`yarn lint`** or **`yarn eslint`**

---
### [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) `8.5.0`
Turns off all rules that are unnecessary or might conflict with [Prettier].

**Uses**
* **`gulpfile.ts`**
* Running command **`yarn lint`** or **`yarn eslint`**
---
### [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) `4.0.0`
Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

**Uses**
* **`gulpfile.ts`**
* Running command **`yarn lint`** or **`yarn eslint`**
---
### [`fork-ts-checker-webpack-plugin`](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin) `7.2.0`
Speeds up TypeScript type checking and `ESLint` linting (by moving each to a separate process)

**Uses**
* **`gulpfile.ts`**
* **`webpack.config.ts`**
---

### [`gulp`](https://www.npmjs.com/package/gulp) `4.0.2`
Streaming task-based build system.

**Uses**
* **`gulpfile.ts`**
* Running command **`yarn build`** or **`yarn gulp`**

---

### [`@toreda/build-tools`](https://www.npmjs.com/package/@toreda/build-tools) `0.7.0`
Build scripts and Gulp pipelines for TypeScript project. Capable of building NPM packages, libraries, and command line apps. Acts as a Gulp wrapper, providing a single consistent build pipeline used by **`@toreda`** NPM projects.

*Note: While this package can make your life easier it's not required for this package, but it's used in the default setup.*

**Uses**
* **`gulpfile.ts`**

---

### [`@toreda/eslint-config`](https://www.npmjs.com/package/@toreda/eslint-config) `2.2.0`
Toreda's TypeScript ESLint configuration and ruleset for ESLint.

While standard for Toreda TypeScript projects, you can define any ruleset you'd like.

**Change Toreda Ruleset**
Edit `.eslintrc.js` and remove `extends`, or change the  `extends` value to change the ESLint ruleset used.
```json
extends: ['@toreda/eslint-config'],
```

**Override Individual Rules**
Add Individual rules to `rules: {...}` in `.eslintrc.js` to change the behavior of that rule only. The rule value set overrides both the default value and the Toreda value for that rule.

**Uses**
* `package.json`

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

### [`@toreda/types`](https://www.npmjs.com/package/@toreda/types) `2.11.0`
Basic and common type definitions used in `@toreda` projects.

**Use**
* `@toreda/build-tools`

---

### [`@types/gulp`](https://www.npmjs.com/package/@types/gulp) `4.0.9`
Type definitions for Gulp.

**Uses**
* `gulpfile.ts`

---
### [`@types/node`](https://www.npmjs.com/package/@types/nodee) `17.0.5`
Type definitions for Node functions.

**Uses**
* Helpful types on import in any project `.ts` file.

---
### [`@types/webpack`](https://www.npmjs.com/package/@types/webpack) `5.28.0`
Type definitions for **`webpack`**. Package version generally always match the **`webpack`** package version to eliminate bugs and API discrepancies.

**Uses**
* **`webpack.config.ts`**

---


### [`@types/webpack-node-externals`](https://www.npmjs.com/package/@types/webpack-node-externals) `2.5.3`
Type definitions for the **`webpack-node-externals`** webpack plugin. Provides typescript type hints for plugin configuration types.

**Uses**
* **`webpack.config.ts`**

---
### [`@types/yargs`](https://www.npmjs.com/package/@types/yargs) `17.0.10`
Adds type support for **`yargs`** function calls.




If you encounter build errors after installing `@types/yargs` it likely means code somewhere in the project did not respect `yargs` types.

Each package export without type definitions becomes an implicit `any` type. This behavior mimics vanilla JavaScript and effectively disables type checking (this is bad).

**Uses**
* **`src/cli.ts`**

---
### [`webpack`](https://www.npmjs.com/package/webpack) `5.65.0`
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
### [`jest`](https://www.npmjs.com/package/jest) `27.4.5`
Intuitive testing framework with integrated code coverage and report formatting.

**Why include this package?**
Jest is included in the project's **`package.json`** as a **`devDependency`**, rather than relying on the jest command being available for a couple important reasons.

Using Jest from **`package.json`** has a few benefits:
* Package guaranteed available. No guessing whether it's installed or what version is installed.
* The project controls the jest version.
* TypeScript often requires additional types or packages to work with popular NPM packages. Jest + TypeScript currently needs **`ts-node`** and **`@types/jest`** (among others). Keeping package versions & package updates synchronized is tough task without surprise updates breaking testing.


**Uses**
* All **`.spec.ts`** test files in **`./tests`**.

**Docs**
* [Getting Started with Jest](https://jestjs.io/docs/getting-started)

---
### [`jest-sonar-reporter`](https://www.npmjs.com/package/jest-sonar-reporter) `2.0.0`
Intuitive testing framework with integrated code coverage and report formatting.

**Why include this package?**
Processes jest execution results and sends to a SonarQube instance. Target SonarQube server details set in `sonar-project.properties`

**Uses**
* All **`.spec.ts`** test files in **`./tests`**.

**Docs**
* [Getting Started with Jest](https://jestjs.io/docs/getting-started)
* [jest-sonar-reporter Github](https://github.com/3dmind/jest-sonar-reporter)

---

### [`terser-webpack-plugin`](https://www.npmjs.com/package/terser-webpack-plugin) `5.3.0`
Uglify replacement focused on better speed and better performance.

**Uses**
* All **`.spec.ts`** files in **`tests/`**

---
### [`ts-node`](https://www.npmjs.com/package/ts-node) `10.4.0`
Run node scripts directly from the command line without transpiling.

**Docs**
* [Configuring TS Node](https://typestrong.org/ts-node/docs/configuration/)
* [How to run TypeScript Scripts with ts-node](https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node)

---

### [`typescript`](https://www.npmjs.com/package/typescript) `4.6.3`
TypeScript package support with `tsconfig.json`.

**Uses**
* Running `yarn build`
* Running `webpack`.
* Using `ts-loader`


&nbsp;

# Legal

## License

[MIT](LICENSE) &copy; Toreda, Inc.

&nbsp;

## Copyright
Copyright &copy; 2019 - 2022 Toreda, Inc. All Rights Reserved.

https://www.toreda.com
