#!/usr/bin/env node

'use strict';

const shell = require('shelljs');
const program = require('commander');

program.action(function () {
    shell.exec('cd ./laradock && docker-compose rm -f && cd ..');
    shell.exec('git submodule deinit laradock && rm -rf laradock');
});
