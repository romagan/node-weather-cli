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

export const printWeather = (res, icon) => {
	console.log(
		dedent(
      `${chalk.bgYellow(' WEATHER ')}
      Погода в городе ${chalk.bold.yellow(res.name)}: ${icon} ${res.weather[0].description}
      Температура:
        сейчас ${res.main.temp} (ощущается как ${res.main.feels_like})
        мин.: ${res.main.temp_min}
        макс.: ${res.main.temp_max}
      Влажность: ${res.main.humidity}%
      Скорость ветра: ${res.wind.speed}
      `
    )
	)
}
