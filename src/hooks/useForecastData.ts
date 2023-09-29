import { useQuery } from "@tanstack/react-query"

import { API5DayForecastParam, get5DayForecast } from "../api/forecast.api"
import { ForecastType } from "../types/forecast.type"
import { CityType } from "../types/city.type"

export interface UseForecastData {
  forecastList: Array<ForecastType>
  city: CityType
  isLoading: boolean
  error: any,
  refetch: () => void
}

interface UseForecastDataConfig {
  params?: API5DayForecastParam
}

export default function useForecastData(config: UseForecastDataConfig): UseForecastData {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['forecast', config.params],
    queryFn: async () => {
      if (!config.params?.lat) {
        return null;
      }
      const response = get5DayForecast(config.params);
      return response;
    },
  });

  const forecastList = data?.list ?? null
  const city = data?.city ?? null

  return {
    isLoading,
    forecastList,
    city,
    error,
    refetch
  }
}
