#!/usr/bin/env node

'use strict';

const LARADOCK_REPO = 'https://github.com/LaraDock/laradock.git';

const shell = require('shelljs');

shell.exec(`git submodule add ${LARADOCK_REPO}`);
