import { API_GET_FORECAST } from "../constants/api"
import api from "../helpers/api.manager"

export type API5DayForecastParam = {
  lat?: number
  lon?: number
  units: 'standard' | 'metric' | 'imperial'
}

export const get5DayForecast = async (params: API5DayForecastParam) => {
  const res = await api.get(API_GET_FORECAST, {
    params
  })
  return res.data
}
