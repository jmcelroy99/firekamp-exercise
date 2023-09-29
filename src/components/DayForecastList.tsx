import { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { ForecastType } from '../types/forecast.type';
import { ForecastListItem } from '../components/ForecastListItem';
import { Colors } from '../constants/colors';
import { formatDay } from '../helpers/time';

type Props = {
  forecastList: Array<ForecastType>,
};

export const DayForecastList: FC<Props> = ({ forecastList }: Props) => {
  const renderItem = ({ item }: { item: ForecastType }) => (
    <ForecastListItem
      forecast={item}      
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
      <Text style={styles.date}>{formatDay(forecastList[0].dt_txt)}</Text>
      </View>
      <FlatList
        data={forecastList}
        keyExtractor={(item) => `${item.dt}`}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.listSep}/>}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dayForecastBack,
    paddingHorizontal: 12,
    paddingVertical: 18,
    borderRadius: 12
  },
  dateContainer: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderColor: Colors.grey
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  listSep: {
    width: 8
  }
});
