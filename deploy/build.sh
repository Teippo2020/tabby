#!/bin/bash

set -eo pipefail
set -x

# more bash-friendly output for jq


npm run-script build

npm run-script minify-js