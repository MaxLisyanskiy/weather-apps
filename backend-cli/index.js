#!/usr/bin/env node
import { argv } from "node:process";

import getArgs from "./utils/args.js";
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from "./services/log.js";
import { saveKeyValue } from "./services/storage.js";
import { APP_DICTIONARY } from "./shared/dictionary.js";
import { getWeather } from "./services/api.js";

const saveToken = async (token) => {
  if (!token.length) return printError("Не передан токен");

  try {
    await saveKeyValue(APP_DICTIONARY.token, token);
    printSuccess("Токен сохранён");
  } catch (error) {
    printError("Не удалось сохранить токен! Ошибка: " + error);
  }
};

const getForcast = async (city) => {
  try {
    const weather = await getWeather(city);
    await saveKeyValue(APP_DICTIONARY.city, city);
    printWeather(weather);
  } catch (e) {
    if (e?.response?.status === 404) {
      printError("Неверно указан город");
    } else if (e?.response?.status === 401) {
      printError("Неверно указан токен");
    } else {
      printError("Ошибка: " + e.message);
    }
  }
};

const init = () => {
  const args = getArgs(argv);

  if (args.h) {
    printHelp();
  }

  if (args.s) {
    getForcast(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  if (Object.keys(args).length === 0) {
    console.log("Добро пожаловать в Weather CLI!");
  }
};

init();
