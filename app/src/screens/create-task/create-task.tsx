import React from "react";

import { Card, Button } from "react-native-elements";

import { StyleSheet, Image } from "react-native";

import { useForm } from "./create-task.state";
import { validate } from "./validation-rules";
import { CreateTaskStyle } from "./create-task.style";

import { InputField } from "../../components/input-field/";
import { DatePicker } from "../../components/date-time-picker/";
import { PriorityPicker } from "../../components/priority-picker/";
import { StatusPicker } from "../../components/status-picker";

import * as ROUTES from "../../constants/routes";

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
  navigation
}) => {
  const { _id, title, author, date, priority, status, imageUrl } =
    route?.params?.task || {};

  const { getTasks } = route?.params;

  const navigateToBoard = () => navigation.navigate(ROUTES.ITEMLIST);

  const {
    handleSubmit,
    handleValueChange,
    values,
    errors,
    removeTask,
    selectImage
  } = useForm(
    validate,
    {
      _id: _id || null,
      title: title || "",
      author: author || "",
      date: date ? new Date(date) : "",
      priority: priority || "minor",
      status: status || "backlog",
      imageUrl: imageUrl || "",
    },
    navigateToBoard,
    getTasks,
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
        <CreateTaskStyle.FormField>
          {values.imageUrl
            ? <Image style={styles.image} source={{ uri: values.imageUrl }} />
            : null
          }
          <CreateTaskStyle.SelectImageBtn title="Select image" onPress={selectImage} />
        </CreateTaskStyle.FormField>
        {_id && (
          <CreateTaskStyle.FormField>
            <CreateTaskStyle.DeleteTaskBtn
              title="DELETE"
              onPress={removeTask}
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

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
  }
});
