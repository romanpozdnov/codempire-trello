import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import * as ROUTES from '../../constants/routes';

const InProgress = ({ navigation }) => {
  return (
    <>
      <View style={styles.next}>
        <Button
          title="Next"
          onPress={() => navigation.navigate(ROUTES.INREVIEW)}
        />
      </View>
      <View style={styles.list}>
        <Text>In progress list here</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  next: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InProgress;
