#!/usr/bin/env node

'use strict';

const shell = require('shelljs');

console.log('Stopping services...');
shell.cd('laradock')
shell.exec('docker-compose stop');
