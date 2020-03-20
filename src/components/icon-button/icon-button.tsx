import React from 'react';
import { Icon } from 'react-native-elements';

import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';

import { IconButtonStyle } from './icon-button.style';

import * as ROUTES from '../../constants/routes';
interface IIconButtonProps {
  navigation: {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
  };
}

export const IconButton: React.FC<IIconButtonProps> = props => {
  const { navigation } = props;

  return (
    <IconButtonStyle.TouchableOpacity>
      <Icon
        reverse
        name="ios-add"
        type="ionicon"
        color="#517fa4"
        onPress={() => navigation.navigate(ROUTES.CREATETASK)}
      // TODO: pass callback
      />
    </IconButtonStyle.TouchableOpacity>
  );
};
