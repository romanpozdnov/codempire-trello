import React, { useState } from 'react';

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
  const [values, setValues] = useState<ITask>(initialState.task);
  const [errors, setErrors] = useState<TFormErrors>({});

  const handleSubmit = () => {
    const newErrors = validate(values);
    if (!Object.keys(newErrors).length) {
      onSubmit(values);
    }
    setErrors(newErrors);
  };

  const handleValueChange = (name, value) => {
    setValues(values => ({ ...values, [name]: value }));
  };

  return {
    handleSubmit,
    handleValueChange,
    values,
    errors,
  };
};
