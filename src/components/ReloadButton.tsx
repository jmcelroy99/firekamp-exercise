import { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  onPress: () => void,
};

export const ReloadButton: FC<Props> = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Ionicons name="md-refresh" size={52} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
