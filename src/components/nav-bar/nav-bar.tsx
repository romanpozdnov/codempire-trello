import React from 'react';
import { Button, Text } from 'react-native';

import { IconButtonStyle } from './nav-bar.style';

export const NavBar = (props) => {
  const { prevHandler, headerStatus, nextHandler } = props;

  return (
    <IconButtonStyle.NavContainer>
      <Button title="BACK" onPress={prevHandler} />
      <Text>{headerStatus}</Text>
      <Button title="NEXT" onPress={nextHandler} />
    </IconButtonStyle.NavContainer>
  );
};
