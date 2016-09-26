#!/usr/bin/env node

'use strict';

const shell = require('shelljs');
const program = require('commander');

shell.exec('cd ./laradock && docker-compose stop && cd ..');
