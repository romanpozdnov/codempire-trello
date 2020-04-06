import React from "react";
import { Input } from "react-native-elements";

interface IInputFieldProps {
  label?: string;
  name?: string;
  value?: string;
  handleValueChange?: (name?: string, text?: string) => void;
  leftIconName?: string;
  errors?: string;
}

export const InputField: React.FC<IInputFieldProps> = (props) => {
  const { label, name, value, handleValueChange, leftIconName, errors } = props;

  return (
    <Input
      label={label}
      value={value}
      onChangeText={(text) => handleValueChange(name, text)}
      leftIcon={{
        type: "font-awesome",
        name: leftIconName,
        containerStyle: { marginRight: 15 },
      }}
      errorMessage={errors ? errors : undefined}
    />
  );
};
