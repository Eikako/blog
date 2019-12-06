const validator = require("validator");

const validString = data => typeof data === "string" && data.trim().length > 0;

const register = data => {
  const errors = {};

  data.name = validString(data.name) ? data.name : "";
  data.password = validString(data.password) ? data.password : "";
  data.confirmPassword = validString(data.confirmPassword)
    ? data.confirmPassword
    : "";

  if (!validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "Name must be between 2 and 20 characters";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }
  if (!validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.password = "Password must be between 6 and 32 characters";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }
  if (!validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Password and Confirm Password must match";
  }
  if (validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm Password is required";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
};

const schemas = {
  register
};

const check = (schema, prop) => (req, res, next) => {
  const { valid, errors } = schema(req[prop]);
  if (!valid) {
    return res.status(422).send(errors);
  }
  next();
};

module.exports = {
  schemas,
  check
};
