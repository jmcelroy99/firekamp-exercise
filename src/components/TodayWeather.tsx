import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { ForecastType } from '../types/forecast.type';
import { CityType } from '../types/city.type';
import { Colors } from '../constants/colors';
import { WeatherIcon } from './WeatherIcon';

type Props = {
  weather: ForecastType,
  city: CityType
};

export const TodayWeather: FC<Props> = ({ weather, city }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <WeatherIcon weatherId={weather.weather[0].icon} size={80}/>
      </View>
      <Text style={styles.city}>{city.name}</Text>      
      <Text style={styles.temp}>{weather.main.temp.toFixed(0)}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
      <Text style={styles.minMax}>H:{weather.main.temp_max}° L:{weather.main.temp_min}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  iconContainer: {
    alignItems: 'center'
  },
  city: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 28,
  },
  temp: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 58,
  },
  description: {
    color: Colors.grey,
    textAlign: 'center',
    fontSize: 18,
  },
  minMax: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
  }
});
