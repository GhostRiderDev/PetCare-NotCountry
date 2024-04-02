import Joi from "joi";
import ValidationError from "../../error/ValidationError";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
});

export const validateUser = (user) => {
  const { error } = userSchema.validate(user);
  if (error) {
    throw new ValidationError("Invalid user data");
  }
};
