import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';

const CreateTask = () => {
  return (
    <View style={styles.container}>
      <Card title="ADD TASK">
        <Input placeholder="Add task..." />
        <Button style={styles.addTaskBtn} title="ADD" />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addTaskBtn: {
    marginTop: 10,
  },
});

export default CreateTask;
