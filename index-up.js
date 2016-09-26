#!/usr/bin/env node

'use strict';

const shell = require('shelljs');

console.log('Creating containers...');
shell.exec('cd ./laradock && docker-compose up -d nginx postgres mysql redis && cd ..');
