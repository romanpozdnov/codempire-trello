import React from "react";
import { View, Picker } from "react-native";

import { StatusPickerStyle } from "./status-picker.style";

import { allStatuses } from "../../constants/task-statuses";

interface IStatusPickerProps {
  name: string;
  value: string;
  handleValueChange: (name: string, selectedStatus: string) => void;
  errors: string;
}

export const StatusPicker: React.FC<IStatusPickerProps> = (props) => {
  const { name, value, handleValueChange, errors } = props;

  return (
    <View>
      <Picker
        selectedValue={value}
        onValueChange={(selectedStatus) =>
          handleValueChange(name, selectedStatus)
        }
      >
        {allStatuses.map((status) => (
          <Picker.Item
            label={status.displayedName}
            value={status.status}
            key={status.status}
          />
        ))}
      </Picker>
      {errors && (
        <StatusPickerStyle.ErrorMessageContainer>
          <StatusPickerStyle.ErrorMessage>
            Status is required
          </StatusPickerStyle.ErrorMessage>
        </StatusPickerStyle.ErrorMessageContainer>
      )}
    </View>
  );
};
