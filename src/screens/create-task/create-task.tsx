import React from 'react';

import {Card, Input} from 'react-native-elements';

import {CreateTaskStyle} from './create-task.style';

import {DatePicker} from '../../components/date-time-picker/';
import {PriorityPicker} from '../../components/priority-picker/';

export const CreateTask = () => {
  return (
    <CreateTaskStyle.Container>
      <Card title="CREATE TASK">
        <Input placeholder="Add task..." />
        <Input placeholder="Author..." />
        <DatePicker />
        <PriorityPicker />
        <CreateTaskStyle.AddTaskBtn title="SAVE" />
      </Card>
    </CreateTaskStyle.Container>
  );
};
