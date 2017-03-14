# generator-yckoa 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A Restful API Server based on Koajs

## Dependencies

- [MongoDB](https://www.mongodb.com)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-yckoa using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-yckoa
```

Then generate your new project:

```bash
yo yckoa [appName]
```

## Commands

- [Initialize App](#initialize-app)
- [Add API](#add-api)

## Initialize App

```bash
mkdir helloWorld
cd helloWorld
yo yckoa [appName]
```

## Install Dependencies

```bash
yarn install
```
or
```bash
npm install
```

## Add API

```bash
yo yckoa:api [apiName] [endpoint=/xxx/xxx] [--socket] [--image]
```



## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [Yu Chen]()


[npm-image]: https://badge.fury.io/js/generator-yckoa.svg
[npm-url]: https://npmjs.org/package/generator-yckoa
[travis-image]: https://travis-ci.org/kuyoonjo/generator-yckoa.svg?branch=master
[travis-url]: https://travis-ci.org/kuyoonjo/generator-yckoa
[daviddm-image]: https://david-dm.org/kuyoonjo/generator-yckoa.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/kuyoonjo/generator-yckoa
[coveralls-image]: https://coveralls.io/repos/kuyoonjo/generator-yckoa/badge.svg
[coveralls-url]: https://coveralls.io/r/kuyoonjo/generator-yckoa
