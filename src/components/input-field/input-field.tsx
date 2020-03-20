import React from 'react';
import { Input } from 'react-native-elements';

export const InputField = ({ label, name, value, handleValueChange, errors }) => {
  return (
    <Input
      label={label}
      value={value}
      onChangeText={(value) => handleValueChange(name, value)}
      leftIcon={{ type: 'font-awesome', name: 'tasks', containerStyle: { marginRight: 15 } }}
      errorMessage={errors ? errors : undefined}
    />
  );
}