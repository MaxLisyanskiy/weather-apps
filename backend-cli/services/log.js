import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
    console.log(chalk.brRed(' ERROR ') + ' ' + error)
}

const printSuccess = (msg) => {
    console.log(chalk.brGreen(' SUCCESS ') + ' ' + msg)
}

const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}
            * Без параметров - вывод погоды
            * -s [CITY] для установки города
            * -t [API_KEY] для сохранения токена
            * -h для вывода помощи
        `)
    );
}
 
export { printError, printSuccess, printHelp }