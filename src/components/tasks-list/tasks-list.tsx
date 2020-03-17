import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';


export const TasksList = (props) => {
  const { tasks } = props;

  if (!tasks.length) {
    return <Text>No tasks with current status</Text>;
  }

  return (

    <View>
      {tasks.map((task, i) => (
        <ListItem key={i} title={task.title} bottomDivider chevron />
      ))}
    </View>
  );
};