import React, { useState } from "react";
import { format } from "date-fns";
import { View, TouchableWithoutFeedback } from "react-native";
import { Input, IconNode } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { DatePickerStyle } from "./date-time-picker.style";

import { TDate } from "../../constants/types";

interface IDatePickerProps {
  label: string;
  date: TDate;
  leftIcon: IconNode;
  onChange: (name: string, selectedDate: TDate) => void;
  errors: string;
}

export const DatePicker: React.FC<IDatePickerProps> = (props) => {
  const { label, date, leftIcon, onChange, errors } = props;

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: TDate) => {
    hideDatePicker();
    onChange("date", selectedDate);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={showDatePicker}>
        <View>
          <View pointerEvents="none">
            <Input
              label={label}
              leftIcon={leftIcon}
              value={date ? format(date, "MMMM d, yyyy H:mma") : ""}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {errors && (
        <DatePickerStyle.ErrorMessageContainer>
          <DatePickerStyle.ErrorMessage>
            Date is required
          </DatePickerStyle.ErrorMessage>
        </DatePickerStyle.ErrorMessageContainer>
      )}
    </View>
  );
};
