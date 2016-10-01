#!/usr/bin/env node

'use strict';

const shell = require('shelljs');

console.log('Removing containers...');
shell.cd('laradock');
shell.exec('docker-compose rm -f');
shell.cd('..');
console.log('Removing Laradock...');
shell.exec('git submodule deinit laradock && rm -rf laradock');
