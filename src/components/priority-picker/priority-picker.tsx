import React, {useState} from 'react';
import {View, Picker} from 'react-native';

export const PriorityPicker = () => {
  const [priority, setPriority] = useState({
    priority: '',
  });

  return (
    <View>
      <Picker
        selectedValue={priority.priority}
        onValueChange={(itemValue, itemIndex) =>
          setPriority({priority: itemValue})
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};
