import React from 'react';
import {View} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

import {ItemListStyle} from './item-list.style';

import {NavBar} from '../../components/nav-bar/';
import {IconButton} from '../../components/icon-button';

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

interface IItemListProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

export const ItemList: React.FC<IItemListProps> = props => {
  const {navigation} = props;

  return (
    <ItemListStyle.List>
      <NavBar />
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
    </ItemListStyle.List>
  );
};
