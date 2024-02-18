#!/usr/bin/env node
import { argv } from 'node:process';

import getArgs from './utils/args.js';
import { printHelp, printSuccess, printError } from './services/log.js';
import { saveKeyValue } from './services/storage.js';

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token)
        printSuccess('Токен сохранён')
    } catch (error) {
        printError('Не удалось сохранить токен! Ошибка: ' + error)
    }
}

const init = () => {
    const args = getArgs(argv)

    if (args.h) {
        printHelp()
    }

    if (args.s) {
        saveKeyValue('token', args.s)
    }

    if (args.t) {
        return saveToken(args.t)
    }
}

init()