import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

import * as ROUTES from '../../constants/routes';

const CreateButton = ({navigation}) => {
  return (
    <View style={styles.addTaskIcon}>
      <Icon
        reverse
        name="ios-add"
        type="ionicon"
        color="#517fa4"
        onPress={() => navigation.navigate(ROUTES.CREATETASK)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addTaskIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    width: 50,
    height: 50,
  },
});

export default CreateButton;
