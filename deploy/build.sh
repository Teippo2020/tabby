#!/bin/bash

set -eo pipefail
set -x

# more bash-friendly output for jq


npm run-script build

./node_modules/.bin/terser dist/index.js -m -o dist/index.js