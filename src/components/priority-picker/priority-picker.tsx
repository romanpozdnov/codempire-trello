import React, { useState } from 'react';
import { View, Picker } from 'react-native';

import { priorities } from '../../constants/priorities';

export const PriorityPicker = () => {
  const [priority, setPriority] = useState('');

  return (
    <View>
      <Picker
        selectedValue={priority}
        onValueChange={(priority) =>
          setPriority(priority)
        }
      >
        {priorities.map((priority) => <Picker.Item label={priority.label} value={priority.value} key={priority.value} />)}
      </Picker>
    </View>
  );
};
