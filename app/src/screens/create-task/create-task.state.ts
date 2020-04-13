import { useState } from 'react';

import ImagePicker from 'react-native-image-picker';

import { createTask, updateTask, deleteTask } from "./create-task.api";

import { ITask, TFormErrors } from '../../constants/types';
import Toast from 'react-native-root-toast';

interface IFormState {
  task: ITask;
  errors: TFormErrors;
  isAjaxError: null;
  isLoading: boolean;
}

export const useForm = (
  validate: (v: ITask) => TFormErrors,
  initialValues: any,
  navigateToBoard: () => void,
  getTasks: () => void,
) => {
  const [state, setState] = useState<IFormState>({
    task: initialValues,
    errors: {},
    isAjaxError: null,
    isLoading: false,
  });

  const saveTask = async () => {
    try {
      const { task } = state;
      setState({ ...state, isLoading: true });
      if (task._id) {
        await updateTask(task._id, task);
        Toast.show('Task was updated successfully');
        navigateToBoard();
        getTasks();
      } else {
        await createTask(task);
        Toast.show('Task was created successfully');
        navigateToBoard();
        getTasks();
      }
    } catch (error) {
      setState({ ...state, isAjaxError: error });
      Toast.show('Something went wrong...');
    } finally {
      setState({ ...state, isLoading: false });
    }
  };

  const removeTask = async () => {
    try {
      const { task } = state;
      setState({ ...state, isLoading: true });
      await deleteTask(task._id);
      Toast.show('Task was deleted successfully');
      navigateToBoard();
      getTasks();
    } catch (error) {
      setState({ ...state, isAjaxError: error });
      Toast.show('Something went wrong...');
    } finally {
      setState({ ...state, isLoading: false });
    }
  };

  const selectImage = async () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        setState({ ...state, task: { ...state.task, avatarUrl: response.uri } });
      }
    }
    )
  };

  const handleSubmit = () => {
    const newErrors = validate(state.task);
    if (!Object.keys(newErrors).length) {
      saveTask();
    }
    setState((prevState) => ({ ...prevState, errors: newErrors }));
  };

  const handleValueChange = (name: string, value: ITask) => {
    setState((prevState) => ({
      ...prevState,
      task: { ...prevState.task, [name]: value },
    }));
  };

  return {
    handleSubmit,
    handleValueChange,
    values: state.task,
    errors: state.errors,
    removeTask,
    selectImage,
  };

};
