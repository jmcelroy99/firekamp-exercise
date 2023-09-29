import { FlatList, StyleSheet, View } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';
import * as Location from 'expo-location';

import type { MainStackParamList } from '../navigation/Main';
import useForecastData from '../hooks/useForecastData';
import { BaseScreen } from '../components/BaseScreen';
import { useEffect, useState } from 'react';
import { TodayWeather } from '../components/TodayWeather';
import { ForecastType } from '../types/forecast.type';
import { DayForecastList } from '../components/DayForecastList';
import { splitForecastListByDay } from '../helpers/forecast';
import useWeatherStore from '../store/useWeatherStore';
import { ReloadButton } from '../components/ReloadButton';

type Props = StackScreenProps<MainStackParamList, 'HomeWeather', 'MainStack'>;

export const HomeWeatherScreen = ({ navigation, route }: Props) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [locationLoading, setLocationLoading] = useState<boolean>(false);
  const { forecastList, city, isLoading, error, refetch } = useForecastData({
    params: {
      lat: location?.coords.latitude,
      lon: location?.coords.longitude,
      units: 'metric'
    }
  }) 
  const { setAppError } = useWeatherStore();
  
  const getLocation = async () => {      
    setLocationLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setAppError("Location permission denied.")
      return;
    }
    
    let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Balanced});
    if (location == null) {
      setAppError("Can't get the location")
    } else {
      setLocation(location);
    }
    setLocationLoading(false);
  }

  const onReload = async () => {
    if (location === null) {
      await getLocation()
    }
    if (error) {
      refetch()
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (error) {
      setAppError("Can't fetch weather information");
    } else {
      setAppError(null);
    }
  }, [error])

  if (isLoading || locationLoading || location == null || forecastList == null) {
    return (
      <BaseScreen loading={isLoading || locationLoading}>
        <View style={styles.reloadContainer}>
          <ReloadButton onPress={onReload}/>
        </View>
      </BaseScreen>
    )
  }

  const renderItem = ({ item }: { item: Array<ForecastType> }) => (
    <DayForecastList
      forecastList={item}      
    />
  );

  const splitedList = splitForecastListByDay(forecastList);

  return (
    <BaseScreen>
      <TodayWeather weather={forecastList[0]} city={city}/>
      <FlatList
        data={splitedList}
        keyExtractor={(item) => `${item[0].dt}`}
        ItemSeparatorComponent={() => <View style={styles.listSep}/>}
        renderItem={renderItem}
      />
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  listSep: {
    height: 16
  },
  reloadContainer: {
    marginTop: 12,
    alignItems: 'center'
  }
});
