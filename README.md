![Toreda](https://content.toreda.com/logo/toreda-logo.png)

[![CI](https://img.shields.io/github/workflow/status/toreda/cli-app-example/CI?style=for-the-badge)](https://github.com/toreda/cli-app-example/actions) [![Coverage](https://img.shields.io/sonar/coverage/toreda_cli-app-example?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/project/activity?graph=coverage&id=toreda_cli-app-example) [![Sonar Quality Gate](https://img.shields.io/sonar/quality_gate/toreda_cli-app-example?server=https%3A%2F%2Fsonarcloud.io&style=for-the-badge)](https://sonarcloud.io/dashboard?id=toreda_cli-app-example)

[![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/toreda/cli-app-example/master?style=for-the-badge)](https://github.com/toreda/cli-app-example/releases/latest) [![GitHub Release Date](https://img.shields.io/github/release-date/toreda/cli-app-example?style=for-the-badge)](https://github.com/toreda/cli-app-example/releases/latest) [![GitHub issues](https://img.shields.io/github/issues/toreda/cli-app-example?style=for-the-badge)](https://github.com/toreda/cli-app-example/issues)

[![license](https://img.shields.io/github/license/toreda/cli-app-example?style=for-the-badge)](https://github.com/toreda/cli-app-example/blob/master/LICENSE)

&nbsp;

# `@toreda/cli-app-example`
## Command Line App Example
Command Line Interface (CLI) app example using TypeScript. Produces a self-contained bundle file which can be installed and execute via command line.

&nbsp;

# Project Tech

## [TypeScript](https://www.typescriptlang.org/)
*JavaScript with syntax for types.*

### Features
-  TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.
-  TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

&nbsp;


## [Speedy Web Compiler (SWC)](https://swc.rs/)
*WC is an extensible Rust-based platform for the next generation of fast developer tools. It's used by tools like Next.js, Parcel, and Deno, as well as companies like Vercel, ByteDance, Tencent, Shopify, and more.*

### Features
- Fast
  - SWC is 20x faster than Babel on a single thread and 70x faster on four cores.


&nbsp;

## [Gulp](https://gulpjs.com/)
*A toolkit to automate & enhance your workflow*

### Features
-   Flexible
    -   Using code over configuration, utilize all of JavaScript to create your gulpfile—where tasks can be written using your own code or chained single purpose plugins.
- Composable
  - Write individual, focused tasks and compose them into larger operations, providing you with speed and accuracy while reducing repetition.
- Efficient
  - By using gulp streams, you can apply many transformations to your files while in memory before anything is written to the disk—significantly speeding up your build process.


&nbsp;

## [ESLint](https://eslint.org/)
*Find and fix problems in your JavaScript code*

Leverage gulp and the flexibility of JavaScript to automate slow, repetitive workflows and compose them into efficient build pipelines.

### Features
- Find Problems
  - ESLint statically analyzes your code to quickly find problems. ESLint is built into most text editors and you can run ESLint as part of your continuous integration pipeline.
- Fix Automatically
  - Many problems ESLint finds can be automatically fixed. ESLint fixes are syntax-aware so you won't experience errors introduced by traditional find-and-replace algorithms.

&nbsp;

## [Jest](https://jestjs.io/)
*Jest is a delightful JavaScript Testing Framework with a focus on simplicity.*.

### Features
- Zero Config
  - Jest aims to work out of the box, config free, on most JavaScript projects.
- Isolated
  - Tests are parallelized by running them in their own processes to maximize performance.
- Snapshots
  - Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline.
- Great API
  - From it to expect - Jest has the entire toolkit in one place. Well documented, well maintained, well good.

&nbsp;

## [Webpack](https://webpack.js.org/)
*Static module bundler for modern JavaScript applications.*

### Features
- Self Contained Bundles

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

### [`@toreda/log`](https://www.npmjs.com/package/@toreda/log)

TypeScript logger with small footprint & configurable transports.

**Uses**
-   `gulpfile.ts`
-   `@toreda/build-tools`
-   `@toreda/strong-types`

---

### [`yargs`](https://www.npmjs.com/package/yargs)

Parse command-line arguments.

## `devDependencies` (`package.json`)

Packages used only during development should be placed in`devDependencies`.

Install packages with the `--dev` flag with yarn or the `--save-dev` flag with NPM to install a package directly into `devDependencies`.

**With yarn:**

```bash
yarn install @toreda/types --dev
```

**With NPM**

```bash
npm install @toreda/types --save-dev
```

---

### [`@swc/core`](https://www.npmjs.com/package/@swc/core)

Core package for the SWC (Speedy Web Compiler). The super-fast TypeScript & JavaScript compiler written in Rust. Significantly

**Uses**

-   `gulpfile.ts`
-   All `.spec.ts` test files where babel was previously used.

---

### [`@swc/jest`](https://www.npmjs.com/package/@swc/jest)

SWC Plugin enabling Jest to use SWC to transform files instead of Babel.

**Uses**

-   Anytime `yarn test` is run.
-   Used as `transform` in `jest.config.js`.
-   All `.spec.ts` test files where babel was previously used.

### [`eslint`](https://www.npmjs.com/package/eslint)

JavaScript & TypeScript linter which flags inconsistent formatting and styles.

**Uses**

-   **`gulpfile.ts`**
-   Running command **`yarn lint`** or **`yarn eslint`**

---

### [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)

Turns off all rules that are unnecessary or might conflict with [Prettier].

**Uses**

-   **`gulpfile.ts`**
-   Running command **`yarn lint`** or **`yarn eslint`**

---

### [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier)

Runs Prettier as an ESLint rule and reports differences as individual ESLint issues.

**Uses**

-   **`gulpfile.ts`**
-   Running command **`yarn lint`** or **`yarn eslint`**

---

### [`fork-ts-checker-webpack-plugin`](https://www.npmjs.com/package/fork-ts-checker-webpack-plugin)

Speeds up TypeScript type checking and `ESLint` linting (by moving each to a separate process)

**Uses**

-   **`gulpfile.ts`**
-   **`webpack.config.ts`**

---

### [`gulp`](https://www.npmjs.com/package/gulp)

Streaming task-based build system.

**Uses**

-   **`gulpfile.ts`**
-   Running command **`yarn build`** or **`yarn gulp`**

---

### [`@toreda/build-tools`](https://www.npmjs.com/package/@toreda/build-tools)

Build scripts and Gulp pipelines for TypeScript project. Capable of building NPM packages, libraries, and command line apps. Acts as a Gulp wrapper, providing a single consistent build pipeline used by **`@toreda`** NPM projects.

_Note: While this package can make your life easier it's not required for this package, but it's used in the default setup._

**Uses**

-   **`gulpfile.ts`**

---

### [`@toreda/eslint-config`](https://www.npmjs.com/package/@toreda/eslint-config)

Toreda's TypeScript ESLint configuration and ruleset for ESLint.

While standard for Toreda TypeScript projects, you can define any ruleset you'd like.

**Change Toreda Ruleset**
Edit `.eslintrc.js` and remove `extends`, or change the `extends` value to change the ESLint ruleset used.

```json
extends: ['@toreda/eslint-config'],
```

**Override Individual Rules**
Add Individual rules to `rules: {...}` in `.eslintrc.js` to change the behavior of that rule only. The rule value set overrides both the default value and the Toreda value for that rule.

**Uses**

-   `package.json`

---

### [`@toreda/prettier-config`](https://www.npmjs.com/package/@toreda/prettier-config)

Ruleset config to enforce Toreda's organization-wide formatting standard. Any prettier ruleset can be used in your project and this is not required for your own projects.

If you removed also remove this key from `package.json`:

```json
  "prettier": "@toreda/prettier-config",
```

**Uses**

-   `package.json`

---

### [`@toreda/types`](https://www.npmjs.com/package/@toreda/types)

Basic and common type definitions used in `@toreda` projects.

**Use**

-   `@toreda/build-tools`

---

### [`@types/gulp`](https://www.npmjs.com/package/@types/gulp)

Type definitions for Gulp.

**Uses**

-   `gulpfile.ts`

---

### [`@types/node`](https://www.npmjs.com/package/@types/node)

Type definitions for Node functions.

**Uses**

-   Helpful types on import in any project `.ts` file.

---

### [`@types/webpack`](https://www.npmjs.com/package/@types/webpack)

Type definitions for **`webpack`**. Package version generally always match the **`webpack`** package version to eliminate bugs and API discrepancies.

**Uses**

-   **`webpack.config.ts`**

---

### [`@types/webpack-node-externals`](https://www.npmjs.com/package/@types/webpack-node-externals)

Type definitions for the **`webpack-node-externals`** webpack plugin. Provides typescript type hints for plugin configuration types.

**Uses**

-   **`webpack.config.ts`**

---

### [`@types/yargs`](https://www.npmjs.com/package/@types/yargs)

Adds type support for **`yargs`** function calls.

If you encounter build errors after installing `@types/yargs` it likely means code somewhere in the project did not respect `yargs` types.

Each package export without type definitions becomes an implicit `any` type. This behavior mimics vanilla JavaScript and effectively disables type checking (this is bad).

**Uses**

-   **`src/cli.ts`**

---

### [`webpack`](https://www.npmjs.com/package/webpack)

Type definitions for **`webpack`**.

**Uses**

-   **`webpack.config.ts`**

---

### [`webpack-node-externals`](https://www.npmjs.com/package/webpack-node-externals)

Adds support for defining external packages to use during build that are not included in bundle. Extremely useful when deploying bundles to platforms with libraries available. For example, AWS Lambda functions require `aws-sdk` during build and development, but the Lambda run-time environment makes `aws-sdk` to all Lambda functions. Using `webpack-node-externals` makes it easy to rely on `aws-sdk` during the build without adding redundant and unused code to the final bundle.

_Excluding run-time packages is different than excluding devDependencies which may only used during build & bundling._

**Uses**

-   **`webpack.config.ts`**

---

### [`jest`](https://www.npmjs.com/package/jest)

Intuitive testing framework with integrated code coverage and report formatting.

**Why include this package?**
Jest is included in the project's **`package.json`** as a **`devDependency`**, rather than relying on the jest command being available for a couple important reasons.

Using Jest from **`package.json`** has a few benefits:

-   Package guaranteed available. No guessing whether it's installed or what version is installed.
-   The project controls the jest version.
-   TypeScript often requires additional types or packages to work with popular NPM packages. Jest + TypeScript currently needs **`ts-node`** and **`@types/jest`** (among others). Keeping package versions & package updates synchronized is tough task without surprise updates breaking testing.

**Uses**

-   All **`.spec.ts`** test files in **`./tests`**.

**Docs**

-   [Getting Started with Jest](https://jestjs.io/docs/getting-started)

---

### [`jest-sonar-reporter`](https://www.npmjs.com/package/jest-sonar-reporter)

Intuitive testing framework with integrated code coverage and report formatting.

**Why include this package?**
Processes jest execution results and sends to a SonarQube instance. Target SonarQube server details set in `sonar-project.properties`

**Uses**

-   All **`.spec.ts`** test files in **`./tests`**.

**Docs**

-   [Getting Started with Jest](https://jestjs.io/docs/getting-started)
-   [jest-sonar-reporter Github](https://github.com/3dmind/jest-sonar-reporter)

---

### [`terser-webpack-plugin`](https://www.npmjs.com/package/terser-webpack-plugin)

Uglify replacement focused on better speed and better performance.

**Uses**

-   All **`.spec.ts`** files in **`tests/`**

---

### [`ts-node`](https://www.npmjs.com/package/ts-node)

Run node scripts directly from the command line without transpiling.

**Docs**

-   [Configuring TS Node](https://typestrong.org/ts-node/docs/configuration/)
-   [How to run TypeScript Scripts with ts-node](https://www.digitalocean.com/community/tutorials/typescript-running-typescript-ts-node)

---

### [`typescript`](https://www.npmjs.com/package/typescript)

TypeScript package support with `tsconfig.json`.

**Uses**

-   Running `yarn build`
-   Running `webpack`.
-   Using `ts-loader`

&nbsp;

# Legal

## License
[MIT](LICENSE) &copy; Toreda, Inc.

&nbsp;
## Copyright
Copyright &copy; 2019 - 2022 Toreda, Inc. All Rights Reserved.


&nbsp;
# Website
Visit Toreda's official company website at [www.toreda.com](https://www.toreda.com)
