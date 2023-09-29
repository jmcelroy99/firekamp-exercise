import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import NetInfo from '@react-native-community/netinfo';

import { Main } from './src/navigation/Main';
import useWeatherStore from './src/store/useWeatherStore';

const queryClient = new QueryClient()

export default function App() {
  const { setAppError } = useWeatherStore();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected === false) {
        setAppError("Network disconnected.")
      } else {
        setAppError(null)
      }
    });

    return () => {
      unsubscribe()
    };
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
