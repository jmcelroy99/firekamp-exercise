import { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

type Props = {
  weatherId: string,
  size?: number
};

export const WeatherIcon: FC<Props> = ({ weatherId, size = 44 }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={`https://openweathermap.org/img/wn/${weatherId}@2x.png`}
        style={[styles.icon, { width: size, height: size }]}
        contentFit='contain'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  icon: {
    width: 44,
    height: 44
  }
});
