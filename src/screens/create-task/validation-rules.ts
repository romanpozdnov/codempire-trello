export const validate = values => {
  let errors = {};

  if (!values.task) {
    errors.task = 'Task is required';
  }

  if (!values.author) {
    errors.author = 'Author is required';
  }

  return errors;
};
