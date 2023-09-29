import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { formatTime } from '../helpers/time';
import { ForecastType } from '../types/forecast.type';
import { WeatherIcon } from './WeatherIcon';
import { Colors } from '../constants/colors';

type Props = {
  forecast: ForecastType,
};

export const ForecastListItem: FC<Props> = ({ forecast }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{formatTime(forecast.dt_txt)}</Text>
      <WeatherIcon weatherId={forecast.weather[0].icon}/>
      <Text style={styles.text}>{forecast.main.temp.toFixed(0)}°</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.forcastOpacity,    
    width: 60,
    height: 120,
    borderRadius: 30,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detail: {
    marginLeft: 4,
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: Colors.white
  },
});
