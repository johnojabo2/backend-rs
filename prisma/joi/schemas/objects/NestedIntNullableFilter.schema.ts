// @ts-nocheck
import Joi from 'joi';


export const NestedIntNullableFilterSchemaObject = {
    equals: Joi.alternatives().try(Joi.number()),
  in: Joi.alternatives().try(Joi.array().items(Joi.number())),
  notIn: Joi.alternatives().try(Joi.array().items(Joi.number())),
  lt: Joi.number(),
  lte: Joi.number(),
  gt: Joi.number(),
  gte: Joi.number(),
  not: Joi.alternatives().try(Joi.number(),
Joi.link('#NestedIntNullableFilter')),
  isSet: Joi.boolean()
}