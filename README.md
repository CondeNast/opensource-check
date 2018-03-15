# OpenSource Check ✅
A Test Runner for verifying Open Source conventions in JavaScript projects

[![license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat)](LICENSE)

_Proudly built by:_

<a href="https://technology.condenast.com"><img src="https://user-images.githubusercontent.com/1215971/35070721-3f136cdc-fbac-11e7-81b4-e3aa5cc70a17.png" title="Conde Nast Technology" width=350/></a>

## Pre-Requisites

This tool can currently only be used for JavaScript/Node projects.

## Install

#### Pre-launch:

    git clone https://github.com/CondeNast/opensource-check.git
    npm install -g opensource-check/

#### Post-launch:

    npm install -g @condenast/opensource-check

## Usage

    opensource-check --path <path-to-project-directory>

    # if package has an organization namespace
    opensource-check --path ./opensource-check --org condenast

<img src="https://user-images.githubusercontent.com/1215971/37443485-74f4b324-27da-11e8-9e77-957de7edaec8.png" title="screenshot" width=350/></a>

## OpenSource Checklist

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

## Thanks

We were inspired by the ideas and code of the following projects:

* [oss-checklist](https://github.com/scriptnull/oss-checklist)
* [repolinter](https://github.com/todogroup/repolinter)
* [danger-js](https://github.com/danger/danger-js)

## Contributors

See the list of [contributors](https://github.com/CondeNast/opensource-check/contributors) who participated in writing this tool.
