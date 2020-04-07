import { useState } from 'react';

import { API } from "../../services/api";

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
        await API.updateTask(task._id, task);
        Toast.show('Task was updated successfully');
        navigateToBoard();
      } else {
        await API.createTask(task);
        Toast.show('Task was created successfully');
        navigateToBoard();
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
      await API.deleteTask(task._id);
      navigateToBoard();
    } catch (error) {
      setState({ ...state, isAjaxError: error });
    } finally {
      setState({ ...state, isLoading: false });
    }
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
  };

};
