#!/usr/bin/env node

'use strict';

const shell = require('shelljs');

shell.exec('cd ./laradock && docker-compose rm -f && cd ..');
shell.exec('git submodule deinit laradock && rm -rf laradock');
