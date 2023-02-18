const Joi = require("joi");


const couriersJoiSchema = Joi.object({
  courier: Joi.string().required(),
  destination: Joi.string().required(),
  startDate: Joi.string().required(),
  startTime: Joi.string().required(),
  endDate: Joi.string().required(),
  endTime: Joi.string().required(),
});

module.exports = couriersJoiSchema;
