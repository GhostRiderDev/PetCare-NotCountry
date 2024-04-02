import { validationResult } from "express-validator";
import ValidationError from "../../error/ValidationError";

export const validateUUID = (uuid) => {
  if (validationResult(uuid).isEmpty()) {
    throw new ValidationError("Id is required");
  }
  if (!uuid.match(/^[0-9a-fA-F]{24}$/)) {
    throw new ValidationError("Invalid id");
  }
};

export const validateEmail = (email) => {
  if (validationResult(email).isEmpty()) {
    throw new ValidationError("Email is required");
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    throw new ValidationError("Invalid email");
  }
};

export const validatePassword = (password) => {
  if (validationResult(password).isEmpty()) {
    throw new ValidationError("Password is required");
  }
};
