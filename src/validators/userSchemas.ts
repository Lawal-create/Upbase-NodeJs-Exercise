import Joi from "joi";
import { phoneNumber, email } from "./globalSchemas";

export const validateUpdateProfileImage = Joi.object({
  profileImageUrl: Joi.any().required().messages({
    "any.required": "profilePhoto is required!"
  })
});

export const validateUpdateProfile = Joi.object({
  phoneNumber,
  firstName: Joi.string().min(2).messages({
    "string.min": "minimum of 2 characters for firstName"
  }),
  lastName: Joi.string().min(2).messages({
    "string.min": "minimum of 2 characters for lastName"
  }),
  email
});
