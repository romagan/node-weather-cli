import axios from 'axios'
import {getKeyValue, PARAMS_NAMES} from './store.js'

const API_URL = `https://api.openweathermap.org/data/2.5/weather`

export const fetchWeather = async (city) => {
  const token = await getKeyValue(PARAMS_NAMES.TOKEN)

  if (!token) {
    throw new Error(`Не задан API ключ, он задается через команду -t [API_KEY]`)
  }

  const {data} = await axios.get(API_URL, {
    params: {
      q: city,
      appid: token,
      lang: `ru`,
      units: `metric`
    }
  })
  console.log(data)

  return data
}
