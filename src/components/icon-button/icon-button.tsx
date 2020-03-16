import React from 'react';
import {Icon} from 'react-native-elements';

import {IconButtonStyle} from './icon-button.style';

import * as ROUTES from '../../constants/routes';

interface IIconButtonProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

export const IconButton: React.FC<IIconButtonProps> = props => {
  const {navigation} = props;

  return (
    <IconButtonStyle.CreateTaskIcon>
      <Icon
        reverse
        name="ios-add"
        type="ionicon"
        color="#517fa4"
        onPress={() => navigation.navigate(ROUTES.CREATETASK)}
      />
    </IconButtonStyle.CreateTaskIcon>
  );
};
