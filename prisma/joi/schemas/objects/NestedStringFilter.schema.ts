// @ts-nocheck
import Joi from 'joi';


export const NestedStringFilterSchemaObject = {
    equals: Joi.string(),
  in: Joi.array().items(Joi.string()),
  notIn: Joi.array().items(Joi.string()),
  lt: Joi.string(),
  lte: Joi.string(),
  gt: Joi.string(),
  gte: Joi.string(),
  contains: Joi.string(),
  startsWith: Joi.string(),
  endsWith: Joi.string(),
  not: Joi.alternatives().try(Joi.string(),
Joi.link('#NestedStringFilter'))
}