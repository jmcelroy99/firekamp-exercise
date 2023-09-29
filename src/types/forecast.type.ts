import { CloudType } from "./cloud.type"
import { MainWeatherType } from "./mainweather.type"
import { WeatherDescriptionType } from "./weatherdescription.type"
import { WindType } from "./wind.type"

export type ForecastType = {
  dt: number
  main: MainWeatherType
  weather: Array<WeatherDescriptionType>
  clouds: CloudType
  wind: WindType
  visibility: number
  pop: number
  dt_txt: string
}