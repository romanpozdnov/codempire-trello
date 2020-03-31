import { useState } from 'react';

import { ITask, TFormErrors } from '../../constants/types';

const initialState = {
  task: {
    task: '',
    user: '',
    date: '',
    priority: '',
  },
  errors: {},
};

interface IFormState {
  task: ITask;
  errors: TFormErrors;
}

export const useForm = (
  onSubmit: (v: ITask) => void,
  validate: (v: ITask) => TFormErrors,
) => {
  const [state, setState] = useState<IFormState>(initialState);

  const handleSubmit = () => {
    const newErrors = validate(state.task);
    if (!Object.keys(newErrors).length) {
      onSubmit(state.task);
    }
    setState(prevState => ({ ...prevState, errors: newErrors }));
  };

  const handleValueChange = (name: string, value: ITask) => {
    setState(prevState => ({
      ...prevState,
      task: { ...prevState.task, [name]: value },
    }));
  };

  return {
    handleSubmit,
    handleValueChange,
    values: state.task,
    errors: state.errors,
  };
};
