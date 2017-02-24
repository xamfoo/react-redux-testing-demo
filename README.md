# Coverage and Testing of React + Redux

[![Build Status](https://travis-ci.org/xamfoo/react-redux-testing-demo.svg?branch=master)](https://travis-ci.org/xamfoo/react-redux-testing-demo)
[![Coverage Status](https://coveralls.io/repos/github/xamfoo/react-redux-testing-demo/badge.svg?branch=master)](https://coveralls.io/github/xamfoo/react-redux-testing-demo?branch=master)

## Introduction
This provides an example of test coverage for a project that is using React and Redux. Use this project to observe coverage and testing of:

- ES6 code
- Single React components
- Single React components (Redux-connected)
- Multiple React components as a group
- Redux middleware

## Usage

### Online

- [See the demo which is the testing target](https://xamfoo.github.io/react-redux-testing-demo/)
- Browse `*.spec.js` files in this repository
- [Browse the coverage provided by the tests](https://coveralls.io/github/xamfoo/react-redux-testing-demo?branch=master)


### Local

To setup the project run `yarn install` or `npm install`. In the repository we can run the following commands:

`npm start` to run the application for development

`npm test` to run tests

`npm run test:watch` to run tests with watchers

`npm run coverage` to run the coverage report and view it in the browser

`npm run check-coverage` to generate an error if coverage falls below threshold

## Tools Used

### Javascript

- [Babel](http://babeljs.io/) for compiling ES6, ES.stage3 and JSX
- [ESLint](http://eslint.org/) to lint according to [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

### CSS

- [Sass](http://sass-lang.com/) for CSS preprocessing (via [node-sass](https://github.com/sass/node-sass))

### Testing (JS)

- [Mocha](http://mochajs.org/) for providing testing framework
- [Sinon](http://sinonjs.org/) for mocking
- [Chai](http://chaijs.com/) for assertions
- [babel-plugin-rewire](https://github.com/speedskater/babel-plugin-rewire) for stubbing ES6 module imports

### Testing (JSX)

- [jsdom](https://github.com/tmpvar/jsdom) for testing DOM in nodejs
- [Enzyme](http://airbnb.io/enzyme/) to provide React test utilities
- [Chai-Enzyme](https://github.com/producthunt/chai-enzyme) to provide React-aware assertions

### Coverage

- [Istanbul](https://istanbul.js.org/) for instrumentation and reports (via [nyc](https://github.com/istanbuljs/nyc))
- [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) for ES6 instrumentation support
- [Coveralls](https://coveralls.io/github/xamfoo/react-redux-testing-demo?branch=master) integration

### Build

- [Gulp](http://gulpjs.com/) for writing build tasks
- [Browserify](http://browserify.org/) for code bundling
- [BrowserSync](http://www.browsersync.io/) for running development server
- [Travis](https://travis-ci.org/xamfoo/react-redux-testing-demo) integration

## Contributing

Feel free to open issues for feedback and questions.

## License

MIT License (Refer to LICENSE.md)
