import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

import IconButton from '../../components/icon-button/icon-button';

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
  {
    title: 'Appointments',
    icon: 'av-timer',
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff',
  },
];

const ItemList = ({navigation}) => {
  return (
    <>
      <View style={styles.list}>
        <Card>
          <View>
            {list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
                bottomDivider
                chevron
              />
            ))}
          </View>
        </Card>
        <IconButton navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default ItemList;
