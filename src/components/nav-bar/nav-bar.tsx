import React from 'react';
import { Button, Text } from 'react-native';

import { IconButtonStyle } from './nav-bar.style';

interface INavBar {
  prevHandler: () => void;
  headerStatus: string;
  nextHandler: () => void;
}

export const NavBar: React.FC<INavBar> = props => {
  const {
    prevHandler,
    headerStatus,
    nextHandler,
    isPrevDisabled,
    isNextDisabled,
  } = props;

  return (
    <IconButtonStyle.NavContainer>
      <Button title="BACK" onPress={prevHandler} disabled={isPrevDisabled} />
      <Text>{headerStatus}</Text>
      <Button title="NEXT" onPress={nextHandler} disabled={isNextDisabled} />
    </IconButtonStyle.NavContainer>
  );
};
