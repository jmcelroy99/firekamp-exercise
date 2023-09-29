import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
  label: string,
};

export const EmptyList: FC<Props> = ({ label }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  label: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
