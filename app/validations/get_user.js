const joi = require('joi');

module.exports = joi.object().keys({
    userId : joi.string().alphanum().required()
}).required();