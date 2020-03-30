import React from 'react';
import { View, Picker } from 'react-native';

import { PriorityPickerStyle } from './priority-picker.style';

import { priorities } from '../../constants/priorities';

interface IPriorityPickerProps {
  name: string;
  value: string;
  handleValueChange: (name: string, selectedPriority: string) => void;
  errors: string;
}

export const PriorityPicker: React.FC<IPriorityPickerProps> = props => {
  const { name, value, handleValueChange, errors } = props;

  return (
    <View>
      <Picker
        selectedValue={value}
        onValueChange={selectedPriority =>
          handleValueChange(name, selectedPriority)
        }>
        {priorities.map(priority => (
          <Picker.Item
            label={priority.label}
            value={priority.value}
            key={priority.value}
          />
        ))}
      </Picker>
      {errors && (
        <PriorityPickerStyle.ErrorMessageContainer>
          <PriorityPickerStyle.ErrorMessage>
            Priority is required
          </PriorityPickerStyle.ErrorMessage>
        </PriorityPickerStyle.ErrorMessageContainer>
      )}
    </View>
  );
};
