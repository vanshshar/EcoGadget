const Joi = require("joi");

const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.string(),
    termsAgree: Joi.string(),
}).required();

const validateSignup = (user) => {
    return userSchema.validate(user);
};


module.exports = validateSignup;