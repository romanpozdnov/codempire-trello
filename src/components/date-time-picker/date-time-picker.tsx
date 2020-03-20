import React, { useState } from 'react';
import { format } from "date-fns";
import { View, TouchableWithoutFeedback } from 'react-native';
import { Input } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';


export const DatePicker = ({ label, date, leftIcon, onChange }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate) => {
    console.log(selectedDate);
    hideDatePicker();
    onChange('date', selectedDate);
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={showDatePicker}>
        <View>
          <View pointerEvents="none">
            <Input
              label={label} leftIcon={leftIcon} value={date ? format(date, "MMMM d, yyyy H:mma") : ''}
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
    </View>
  );
};
