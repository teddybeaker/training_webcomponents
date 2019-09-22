#!/bin/bash

# es5
cat dist/bsy-nav/{runtime-es5,polyfills-es5,styles-es5,main-es5}.js > dist/elements/ship-es5.js

# es2015
cat dist/bsy-nav/{runtime-es2015,polyfills-es2015,styles-es2015,main-es2015}.js > dist/elements/ship-es2015.js
