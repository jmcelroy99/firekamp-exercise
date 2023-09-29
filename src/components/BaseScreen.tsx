import { FC, ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

import { Colors } from '../constants/colors';
import useWeatherStore from '../store/useWeatherStore';

type Props = {
  children?: ReactNode,
  contentStyle?: any,
  loading?: boolean
};

export const BaseScreen: FC<Props> = ({ loading = false, contentStyle, children }: Props) => {
  const { appError } = useWeatherStore();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/background.png")}
        contentFit='cover'
        style={styles.background}
      />
      {(appError != null) && (
        <View style={styles.danger}>
          <Text style={styles.dangerLabel}>{appError}</Text>
        </View>
      )}
      <View style={[styles.contentStyle, contentStyle]}>
        {!loading ? children : (
          <ActivityIndicator size={"large"} color={Colors.white}/>
        )}
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.primary,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.white
  },
  contentStyle: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 8
  },  
  danger: {
    paddingHorizontal: 24,
    paddingVertical: 4,
    backgroundColor: Colors.danger,
  },
  dangerLabel: {
    fontSize: 16,
    color: Colors.white
  }
});
