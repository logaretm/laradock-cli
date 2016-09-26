#!/usr/bin/env node

'use strict';

const LARADOCK_REPO = 'https://github.com/LaraDock/laradock.git';

const program = require('commander');
const shell = require('shelljs');

program.version('0.0.1');

program.command('init')
       .description('Initilizes Laradock in the current directory.')
       .action(function () {
            shell.exec(`git submodule add ${LARADOCK_REPO}`);
       });

program.command('up')
       .description('Brings the containers up')
       .action(function () {
           shell.exec('cd ./laradock && docker-compose up -d nginx postgres mysql redis && cd ..')
       });

program.command('halt')
       .description('Stops the containers')
       .action(function () {
           shell.exec('cd ./laradock && docker-compose stop && cd ..');
       });

program.command('destroy')
       .description('Removes the containers and removes laradock.')
       .action(function () {
           shell.exec('cd ./laradock && docker-compose rm -f && cd ..');
           shell.exec('git submodule deinit laradock && rm -rf laradock');
       });
