export const validate = values => {
  let errors = {};

  if (!values.task) {
    errors.task = 'Task is required';
  }

  if (!values.author) {
    errors.author = 'Author is required';
  }

  if (!values.date) {
    errors.date = 'Date is required';
  }

  if (!values.priority) {
    errors.priority = 'Priority is required';
  }

  return errors;
};
