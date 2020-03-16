import React from 'react';
import {Button, Text} from 'react-native';

import {IconButtonStyle} from './nav-bar.style';

export const NavBar = () => {
  return (
    <IconButtonStyle.NavContainer>
      <Button title="BACK" />
      <Text>Header status</Text>
      <Button title="NEXT" />
    </IconButtonStyle.NavContainer>
  );
};
