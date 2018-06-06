# OpenSource Check ✅
A Test Runner for verifying Open Source conventions in JavaScript projects

[![license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat)](LICENSE)

_Proudly built by:_

<a href="https://technology.condenast.com"><img src="https://user-images.githubusercontent.com/1215971/35070721-3f136cdc-fbac-11e7-81b4-e3aa5cc70a17.png" title="Conde Nast Technology" width=350/></a>

## Pre-Requisites

This utility can currently only be used for JavaScript/Node projects.

## Install

This utility can be used as a temporary dependency, global dependency or a dev dependency.

Head over to the [usage](##usage) section below on how to set it up based on your preference.

## Usage

### Parameters

The utility accepts the following parameters:

* --path - to specify the path of your project directory (defaults to current working directory)
* --org - to specify the npm organization namespace for your project

### Usage as a temporary dependency

This is great option for taking this a quick spin!

    npx @condenast/opensource-check --path <your-project-path>
    npx @condenast/opensource-check --path ./glamorous
    npx @condenast/opensource-check --path ./xml-to-react --org condenast

### Usage as a global dependency

This is a good option if you plan to use this frequently but don't want it to be a part of your project setup.

    npm install -g @condenast/opensource-check

    opensource-check --path <your-project-path>
    opensource-check --path ./glamorous
    opensource-check --path ./xml-to-react --org condenast

### Usage as a dev dependency

This is a wonderful option if you plan to use this as part of your project workflow including using in CI environment.

    npm install -D @condenast/opensource-check

    npx @condenast/opensource-check --path <your-project-path>
    npx @condenast/opensource-check --path ./glamorous
    npx @condenast/opensource-check --path ./xml-to-react --org condenast

### Screenshot

This is a sample screenshot of running this utlility:

<img src="https://user-images.githubusercontent.com/1215971/37443485-74f4b324-27da-11e8-9e77-957de7edaec8.png" title="screenshot" width=350/></a>

## Checklist

The current checklist of things that are verified by the utility on every run:

### Documentation

- [ ] Has a README
  - [ ] Has a Title
  - [ ] Has an Install section
  - [ ] Has a Usage section
- [ ] Has a License
- [ ] Has a Code of Conduct
- [ ] Has Contributing Guidelines
- [ ] Has an Issue template
- [ ] Has a Pull Request template
- [ ] Has a Changelog
- [ ] Has Examples

### Development

- [ ] Has a package.json
  - [ ] Has org namespace, if applicable
  - [ ] Has a version
  - [ ] Has a description
  - [ ] Has a main or bin
  - [ ] Has a link to git repository
  - [ ] Has contributors
  - [ ] Has a license
- [ ] Has a .gitignore
- [ ] Has a linter
- [ ] Has a test runner

## Boilerplate

These documents are provided under the [boilerplate](/boilerplate) directory for use by any project:

1. LICENSE.md - [Apache 2.0](https://github.com/licenses/license-templates/blob/master/templates/apache.txt)
2. CODE_OF_CONDUCT.md - [Contributor Covenant v1.4](https://www.contributor-covenant.org/version/1/4/code-of-conduct.md)
3. CONTRIBUTING.md - (inspired from [Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) and [Rails](https://github.com/rails/rails/blob/master/CONTRIBUTING.md))
4. ISSUE_TEMPLATE.md
5. PULL_REQUEST_TEMPLATE.md
6. README.md

## Projects that Checked-Out!

This is a list of projects that pass the Open Source Checks:

* OpenSource Check - how meta!
* [XML To React](https://github.com/condenast/xml-to-react)
* [Quick Bus](https://github.com/condenast/quick-bus)
* [Launch Vehicle FBM](https://github.com/condenast/launch-vehicle-fbm)

## Thanks

We were inspired by the ideas and code of the following projects:

* [oss-checklist](https://github.com/scriptnull/oss-checklist)
* [repolinter](https://github.com/todogroup/repolinter)
* [danger-js](https://github.com/danger/danger-js)

## Contributors

See the list of [contributors](https://github.com/CondeNast/opensource-check/contributors) who participated in writing this tool.
