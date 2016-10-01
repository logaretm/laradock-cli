#!/usr/bin/env node

'use strict';

const shell = require('shelljs');

shell.cd('laradock')
shell.exec('docker-compose stop');
