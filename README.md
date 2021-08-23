# VerifyPage

![build](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

Chrome Extension, TypeScript

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Includes the following

* TypeScript
* Webpack
* React
* Jest
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

## Load extension to chrome
Go to chrome://extensions and enable 'Developer Mode' on the upper right corner.
Now you can load `dist` directory of our local extension, after you completed the build process.

## Test
`npx jest` or `npm run test`
