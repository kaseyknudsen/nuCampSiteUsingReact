export const validateUserLoginForm = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = "username required";
  }
  if (!values.password) {
    errors.password = "password required";
  }
  if (values.username.length < 6) {
    errors.username = "username must be at least 6 characters";
  } else if (values.username.length > 15) {
    errors.username = "username must be 15 characters or less";
  }
  if (values.password.length < 8) {
    errors.password = "password must be at least 8 characters";
  }
  return errors;
};
