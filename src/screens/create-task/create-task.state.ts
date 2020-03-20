import React, { useState, useEffect } from 'react';

export const useForm = (onSubmit, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!Object.keys(errors).length && isSubmitting) {
      onSubmit(values);
    }
  }, [errors]);

  const handleSubmit = () => {
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  const handleValueChange = (name, value) => {
    setValues(values => ({ ...values, [name]: value }));
  }

  return {
    handleSubmit,
    handleValueChange,
    values,
    errors,
  };
}