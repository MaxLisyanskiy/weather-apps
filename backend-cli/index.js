#!/usr/bin/env node
import { argv } from 'node:process';

import getArgs from './utils/args.js';
import { printHelp } from './services/log.js';

const init = () => {
    const args = getArgs(argv)

    if (args.h) {
        printHelp()
    }
}

init()