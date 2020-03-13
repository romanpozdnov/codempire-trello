import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';

import DatePicker from '../../components/date-time-picker/date-time-picker';
import PriorityPicker from '../../components/priority-picker/priority-picker';

const CreateTask = () => {
  return (
    <View style={styles.container}>
      <Card title="CREATE TASK">
        <Input placeholder="Add task..." />
        <Input placeholder="Author..." />
        <DatePicker />
        <PriorityPicker />
        <Button style={styles.addTaskBtn} title="SAVE" />
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
