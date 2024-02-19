import chalk from "chalk";
import dedent from "dedent-js";
import { getIcon } from "./api.js";

const printError = (error) => {
  console.log(chalk.bgRed(" ERROR ") + " " + error);
};

const printSuccess = (msg) => {
  console.log(chalk.bgGreen(" SUCCESS ") + " " + msg);
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan(" HELP ")}
            * Без параметров - вывод погоды
            * -s [CITY] для установки города
            * -t [API_KEY] для сохранения токена
            * -h для вывода помощи
        `),
  );
};

const printWeather = (res) => {
  console.log(
    dedent(`${chalk.bgYellow(" WEATHER ")}
            Погода в городе ${res.name}:
            ${getIcon(res.weather[0].icon)}  ${res.weather[0].description}
            Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
            Влажность: ${res.main.humidity}%
        `),
  );
};

export { printError, printSuccess, printHelp, printWeather };
