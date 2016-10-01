#!/usr/bin/env node

'use strict';

const WORKSPACE_CONTAINER_NAME = "workspace";

const shell = require('shelljs');

if (~shell.env['OS'].indexOf('Windows')) {
    // Get Workspace container id.
    const output = shell.exec(
        `docker ps -aqf "name=${WORKSPACE_CONTAINER_NAME}"`,
        { silent: true }
    ).stdout.trim();

    // Maybe requires winpty if the input is not TTY.
    let code = shell.exec(`docker exec -it ${output} bash`).code;
    if (code !== 0) {
        code = shell.exec(`winpty docker exec -it ${output} bash`).code;
    }

    if (code !== 0) {
        console.log('Seems like we can\'t ssh into the workspace, run one of the following commands instead\n');
        console.log(`docker exec -it ${output} bash`);
        console.log(`winpty docker exec -it ${output} bash`);
    }

    return 0;
}

// UNIX
shell.cd('laradock');
shell.exec(`docker-compose exec ${WORKSPACE_CONTAINER_NAME} bash`);
