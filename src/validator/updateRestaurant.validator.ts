import Joi from "joi";

const UpdateValidator = Joi.object({
  code: Joi.string().required(),
  name: Joi.string(),
  age: Joi.number(),
  location: Joi.string(),
  website: Joi.string()
});

export default UpdateValidator;