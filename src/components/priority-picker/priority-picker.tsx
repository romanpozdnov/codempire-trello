import React, {useState} from 'react';
import {View, Picker} from 'react-native';

const PriorityPicker = () => {
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

export default PriorityPicker;
