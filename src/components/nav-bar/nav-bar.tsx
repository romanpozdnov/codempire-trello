import React from 'react';
import {Button, View, StyleSheet} from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.navContainer}>
      <Button title="BACK" />
      <Button title="NEXT" />
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
    marginRight: 8,
  },
});

export default NavBar;
