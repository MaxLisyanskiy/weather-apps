#!/usr/bin/env node
import { argv } from 'node:process';

import getArgs from './utils/args.js';

const init = () => {
    const args = getArgs(argv)
    console.log(args)
}

init()