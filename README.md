# demo-requirejs-to-webpack
Demo project converting from AMD require.js to CommonJS webpack

## About
This repo is to test the process of converting from an AMD-style project using RequireJS to a CommonJS-style project usig Webpack.

[RequireJS](https://requirejs.org/) is not simply a bundler for JS projects. In fact, the primary use case is for dynamically loading JS files as modules. You can setup logic that only makes an HTTP request to get a JS file if the necessary JS runs in the browser to trigger it.

[Webpack](https://webpack.js.org/) on the other hand is used to bundle multiple modules into a single file as a build step before deploying or running it.

## Why?
The RequireJS approach is well engineered, and [crazy fast compared to webpack and other bundlers](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/). So why would we want to move away from it?

There was a lot of upheval going on the Javascript ecosystem at the time RequireJS was released, and there were [two competing approaches for how to handle modular Javascript](https://auth0.com/blog/javascript-module-systems-showdown/).

### AMD
AMD loading was designed to be ascyncronous, and so from the very start it was designed for AJAX loading that could gracefully prevent applications hanging while waiting for modules to load. RequireJS and Dojo implemented their dynamic loaders based on the AMD pattern.

### CommonJS
AMD was an early fork from CommonJS, which was attempting to do the same thing, but syncronously. It was designed for server-side use in projects like NodeJS.

### Winner
Both approaches were proposed as standards for ES2015, and for a while the spec said "meh, why not both"? Eventually the powers that be adopted a new standard, ES2015 modules. CommonJS ecosystems added transpilers to provide the support, but AMD ecosystems did not. ES2015 modules do not provide for asyncronous loading, so they were fundamentally incompatible. Sadly, many new cool features in Javascript are easy to leverage when you have something like Webpack and Babel to manage polyfills, but much harder in a RequireJS ecosystem with dynamic loading.

Luckily, as of 2017, Javascript now how asyncronous dynamic loading as part of the ES2017 spec! So the necessary features to be able to have CommonJS support AND asynchronous loading are in place.

## Approach
This repo will start by stubbing out a simple Require.JS project approach with client side dynamic asyncronous includes. It will then parallel the steps necessary to run the same modules (without changes to the modules themselves) in a modern ES2015 approach.

### ToDo
Investigate [SystemJS](https://github.com/systemjs/systemjs) as an intermediary step to supporting both approaches during transition.

## Examples
* View source code in {/src} for full details
* AMD module loading can be tested in any browser by opening [example.amd.html](src/example.amd.html)