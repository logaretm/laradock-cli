#!/usr/bin/env node

'use strict';

const shell = require('shelljs');

console.log('Removing containers...');
shell.exec('cd ./laradock && docker-compose rm -f && cd ..');
console.log('Removing Laradock...');
shell.exec('git submodule deinit laradock && rm -rf laradock');
