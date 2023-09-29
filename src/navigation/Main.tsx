import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeWeatherScreen } from '../screens/HomeWeatherScreen';

export type MainStackParamList = {
  HomeWeather: {
  };
};

const MainStack = createStackNavigator<MainStackParamList>();

export const Main = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <MainStack.Screen name="HomeWeather" component={HomeWeatherScreen} />
  </MainStack.Navigator>
);
