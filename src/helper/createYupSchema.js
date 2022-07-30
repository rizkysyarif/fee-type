import * as yup from "yup";

export default function createYupSchema(schema, config) {
  const { data } = config;
  const {
    validationType,
    validations = [],
    typeErrorMsg,
  } = config.validationContent;

  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  if (typeErrorMsg) {
    validator = yup[validationType]().typeError(typeErrorMsg);
  }
  validations.forEach((validation) => {
    const { type, value, msg } = validation;
    if (!validator[type]) {
      return;
    }
    if (value) {
      validator = validator[type](value, msg);
    } else {
      validator = validator[type](msg);
    }
  });
  schema[data] = validator;
  return schema;
}
