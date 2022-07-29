#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printError, printSuccess, printWeather} from './services/log.js'
import {getKeyValue, saveKeyValue, PARAMS_NAMES} from './services/store.js'
import {fetchWeather} from './services/api.js'
import {getIcon} from './services/icon.js'

const saveCity = async (city) => {
  if (!city.length) {
    printError(`Не передан город`)
    return
  }

  try {
    await saveKeyValue(PARAMS_NAMES.CITY, city)
    printSuccess(`Город сохранен`)
  } catch (err) {
    printError(err.message)
  }


}

const saveToken = async (token) => {
  if (!token.length) {
    printError(`Не передан токен`)
    return
  }

  try {
    await saveKeyValue(PARAMS_NAMES.TOKEN, token)
    printSuccess(`Токен сохранен`)
  } catch (err) {
    printError(err.message)
  }
}

const getWeather = async () => {
	try {
    const city = process.env.CITY ?? await getKeyValue(PARAMS_NAMES.CITY)
		const weather = await fetchWeather(city)
    const icon = getIcon(weather.weather[0].icon)

		printWeather(weather, icon)
	} catch (err) {
		if (err?.response?.status === 404) {
			printError(`Неверно указан город`)
		} else if (err?.response?.status === 401) {
			printError(`Неверно указан токен`)
		} else {
			printError(err.message)
		}
	}
}

const init = async () => {
  const args = getArgs(process.argv)

  if (args.h) {
    printHelp()
  }

  if (args.c) {
    await saveCity(args.c)
  }

  if (args.t) {
    await saveToken(args.t)
  }

  getWeather()
}

init()
