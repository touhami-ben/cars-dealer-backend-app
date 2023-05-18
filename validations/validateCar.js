const Joi = require("joi");
const createValidator = require("./createValidator");

const carSchema = Joi.object({
    name: Joi.string().required(),
    image_url: Joi.string().allow("").optional(),
    price: Joi.number().min(0).required(),
    make: Joi.string().allow("").optional(),
    condition: Joi.string().allow("").optional(),
    is_available: Joi.boolean().optional(),
});

module.exports = createValidator(carSchema);