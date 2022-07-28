#!/usr/bin/env node
import {getArgs} from './helpers/args.js'
import {printHelp, printError, printSuccess} from './services/log.js'
import {saveKeyValue, PARAMS_NAMES} from './services/store.js'
import {getWeather} from './services/api.js'

const saveCity = async (city) => {
  await saveKeyValue(PARAMS_NAMES.CITY, city)
}

const saveToken = async (token) => {
  if (!token.length) {
    printError(`Не передан токен`)
    return
  }

  try {
    await saveKeyValue(PARAMS_NAMES.TOKEN, token)
    printSuccess(`Token was saved`)
  } catch (err) {
    printError(err.message)
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

  getWeather(`moscow`)
}

init()
