import React from 'react';

import { Card } from 'react-native-elements';

import { useForm } from './create-task.state';
import { validate } from './validation-rules';
import { CreateTaskStyle } from './create-task.style';

import { InputField } from '../../components/input-field/';
import { DatePicker } from '../../components/date-time-picker/';
import { PriorityPicker } from '../../components/priority-picker/';

const saveTask = values => { };

export const CreateTask = () => {
  const { handleSubmit, handleValueChange, values, errors } = useForm(
    saveTask,
    validate,
  );

  return (
    <CreateTaskStyle.Container>
      <Card title="CREATE TASK">
        <CreateTaskStyle.FormField>
          <InputField
            label="Task"
            name="task"
            value={values.task}
            handleValueChange={handleValueChange}
            leftIconName="tasks"
            errors={errors.task}
          />
        </CreateTaskStyle.FormField>
        <CreateTaskStyle.FormField>
          <InputField
            label="Author"
            name="author"
            value={values.author}
            handleValueChange={handleValueChange}
            leftIconName="user"
            errors={errors.author}
          />
        </CreateTaskStyle.FormField>
        <CreateTaskStyle.FormField>
          <DatePicker
            label="Date"
            date={values.date}
            onChange={handleValueChange}
            leftIcon={{
              type: 'font-awesome',
              name: 'calendar',
              containerStyle: { marginRight: 15 },
            }}
            errors={errors.date}
          />
        </CreateTaskStyle.FormField>
        <CreateTaskStyle.FormField>
          <PriorityPicker
            label="Priority"
            name="priority"
            value={values.priority}
            handleValueChange={handleValueChange}
            errors={errors.priority}
          />
        </CreateTaskStyle.FormField>
        <CreateTaskStyle.AddTaskBtn title="SAVE" onPress={handleSubmit} />
      </Card>
    </CreateTaskStyle.Container>
  );
};
