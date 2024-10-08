// @ts-nocheck
import Joi from 'joi';
import { QueryModeSchema } from '../enums/QueryMode.schema';
import { NestedStringWithAggregatesFilterSchemaObject } from './NestedStringWithAggregatesFilter.schema';
import { NestedIntFilterSchemaObject } from './NestedIntFilter.schema';
import { NestedStringFilterSchemaObject } from './NestedStringFilter.schema'

export const StringWithAggregatesFilterSchemaObject = {
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
  mode: QueryModeSchema,
  not: Joi.alternatives().try(Joi.string(),
Joi.object().keys(NestedStringWithAggregatesFilterSchemaObject)),
  _count: Joi.object().keys(NestedIntFilterSchemaObject),
  _min: Joi.object().keys(NestedStringFilterSchemaObject),
  _max: Joi.object().keys(NestedStringFilterSchemaObject)
}