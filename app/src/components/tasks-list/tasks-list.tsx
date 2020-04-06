import React from "react";
import { FlatList, Text } from "react-native";
import { ListItem } from "react-native-elements";

interface ITasksList {
  tasks: [];
}

export const TasksList: React.FC<ITasksList> = (props) => {
  const { tasks, onItemClick } = props;

  if (!tasks.length) {
    return <Text>No tasks with current status</Text>;
  }

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <ListItem
      title={item.title}
      onPress={() => onItemClick(item)}
      bottomDivider
      chevron
    />
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={tasks}
      renderItem={renderItem}
    />
  );
};
