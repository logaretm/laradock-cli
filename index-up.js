#!/usr/bin/env node

'use strict';

const shell = require('shelljs');

shell.cd('laradock');
console.log('Creating containers...');
shell.exec('docker-compose up -d nginx postgres mysql redis');
