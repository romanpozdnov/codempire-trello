import React from "react";

import { Card } from "react-native-elements";

import { useForm } from "./create-task.state";
import { validate } from "./validation-rules";
import { CreateTaskStyle } from "./create-task.style";

import { InputField } from "../../components/input-field/";
import { DatePicker } from "../../components/date-time-picker/";
import { PriorityPicker } from "../../components/priority-picker/";
import { StatusPicker } from "../../components/status-picker";

import { tasksAPI } from "../../api";

import * as ROUTES from "../../constants/routes";

import { ITask } from "../../constants/types";

import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

interface ICreateTaskProps {
  route?: any;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const CreateTask: React.FC<ICreateTaskProps> = ({
  route,
  navigation,
}) => {
  const { _id, title, author, date, priority, status } =
    route?.params?.task || {};

  const saveTask = async (values: ITask) => {
    _id
      ? await tasksAPI.updateTask(_id, values)
      : await tasksAPI.createTask(values);
  };

  const deleteTask = async () => {
    await tasksAPI.deleteTask(_id);
    navigateToBoard();
  };

  const navigateToBoard = () => {
    navigation.navigate(ROUTES.ITEMLIST);
  };

  const { handleSubmit, handleValueChange, values, errors } = useForm(
    saveTask,
    validate,
    {
      title: title || "",
      author: author || "",
      date: date ? new Date(date) : "",
      priority: priority || "minor",
      status: status || "backlog",
    },
    navigateToBoard
  );

  return (
    <CreateTaskStyle.Container>
      <Card title="CREATE TASK">
        <CreateTaskStyle.FormField>
          <InputField
            label="Title"
            name="title"
            value={values.title}
            handleValueChange={handleValueChange}
            leftIconName="tasks"
            errors={errors.title}
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
              type: "font-awesome",
              name: "calendar",
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
        <CreateTaskStyle.FormField>
          <StatusPicker
            label="Status"
            name="status"
            value={values.status}
            handleValueChange={handleValueChange}
            errors={errors.status}
          />
        </CreateTaskStyle.FormField>
        {_id && (
          <CreateTaskStyle.FormField>
            <CreateTaskStyle.DeleteTaskBtn
              title="DELETE"
              onPress={() => deleteTask()}
            />
          </CreateTaskStyle.FormField>
        )}
        <CreateTaskStyle.FormField>
          <CreateTaskStyle.AddTaskBtn title="SAVE" onPress={handleSubmit} />
        </CreateTaskStyle.FormField>
      </Card>
    </CreateTaskStyle.Container>
  );
};
