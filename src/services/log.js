import chalk from 'chalk'
import dedent from 'dedent-js'

export const printError = (err) => {
  console.log(chalk.bgRed(`ERROR ${err}`))
}

export const printSuccess = (msg) => {
  console.log(chalk.bgGreen(`SUCCESS ${msg}`))
}

export const printHelp = () => {
  console.log(
    dedent(
      `${chalk.black.bgWhite(`HELP`)}
      Без параметров - вывод погоды
      -c [CITY] установить город
      -h вывод помощи
      -t [API_KEY] сохранение токена
      `
    )
  )
}
