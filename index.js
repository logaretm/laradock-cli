#!/usr/bin/env node

'use strict';

const program = require('commander');
const shell = require('shelljs');

program.version('0.0.1')
       .command('init', 'Initilizes Laradock in the current directory.')
       .command('up', 'Brings the containers up')
       .command('halt', 'Stops the containers')
       .command('destroy', 'Removes the containers and removes laradock.')
       .parse(process.argv);
