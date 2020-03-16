import React from 'react';
import {Button} from 'react-native';

import {IconButtonStyle} from './nav-bar.style';

export const NavBar = () => {
  return (
    <IconButtonStyle.NavContainer>
      <Button title="BACK" />
      <Button title="NEXT" />
    </IconButtonStyle.NavContainer>
  );
};
