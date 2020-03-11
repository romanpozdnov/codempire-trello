import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InReview = () => {
  return (
    <View style={styles.list}>
      <Text>In review list here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InReview;
