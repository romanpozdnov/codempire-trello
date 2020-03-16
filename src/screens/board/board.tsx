import React from 'react';
import {View} from 'react-native';
import {Card, ListItem} from 'react-native-elements';

import {BoardStyle} from './board.style';

import {NavBar} from '../../components/nav-bar/';
import {IconButton} from '../../components/icon-button';

// TODO: add status to everyone
const list = [
  {
    title: 'Appointments',
    status: 'in-progress',
  },
  {
    title: 'Trips',
    status: 'in-progress',
  },
  {
    title: 'Appointments',
    status: 'in-progress',
  },
  {
    title: 'Trips',
    status: 'in-progress',
  },
  {
    title: 'Appointments',
    status: 'in-progress',
  },
  {
    title: 'Trips',
    status: 'in-progress',
  },
];

interface IItemListProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

// TODO: rename to Board + board.tsx
export const Board: React.FC<IItemListProps> = props => {
  const {navigation} = props;

  // TODO: create hook with changing status;

  return (
    <BoardStyle.List>
      {/* TODO: pass props with changing status */}
      <NavBar />
      <Card>
        <View>
          {list.map((item, i) => (
            <ListItem key={i} title={item.title} bottomDivider chevron />
          ))}
        </View>
      </Card>
      <IconButton navigation={navigation} />
    </BoardStyle.List>
  );
};
