import React, { useState } from 'react';
import { View, Picker } from 'react-native';

import { priorities } from '../../constants/priorities';

export const PriorityPicker = () => {
  const [selectedPriority, setPriority] = useState('');

  return (
    <View>
      <Picker
        selectedValue={selectedPriority}
        onValueChange={value => setPriority(value)}>
        {priorities.map(priority => (
          <Picker.Item
            label={priority.label}
            value={priority.value}
            key={priority.value}
          />
        ))}
      </Picker>
    </View>
  );
};
