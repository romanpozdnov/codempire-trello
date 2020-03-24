import React from 'react';
import { Input } from 'react-native-elements';

export const InputField = ({
  label,
  name,
  value,
  handleValueChange,
  leftIcon,
  errors,
}) => {
  return (
    <Input
      label={label}
      value={value}
      onChangeText={text => handleValueChange(name, text)}
      leftIcon={{
        type: 'font-awesome',
        name: leftIcon,
        containerStyle: { marginRight: 15 },
      }}
      errorMessage={errors ? errors : undefined}
    />
  );
};
