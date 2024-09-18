// @ts-nocheck
import Joi from 'joi';
import { StringFieldUpdateOperationsInputSchemaObject } from './StringFieldUpdateOperationsInput.schema';
import { EnumRoleFieldUpdateOperationsInputSchemaObject } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputSchemaObject } from './DateTimeFieldUpdateOperationsInput.schema';
import { TicketUncheckedUpdateManyWithoutUserNestedInputSchemaObject } from './TicketUncheckedUpdateManyWithoutUserNestedInput.schema';
import { TicketUncheckedUpdateManyWithoutDriverNestedInputSchemaObject } from './TicketUncheckedUpdateManyWithoutDriverNestedInput.schema'

export const UserUncheckedUpdateInputSchemaObject = {
    firstName: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  lastName: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  matricNo: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  email: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  password: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  phone: Joi.alternatives().try(Joi.string(),
Joi.object().keys(StringFieldUpdateOperationsInputSchemaObject)),
  role: Joi.alternatives().try(Joi.object().keys(EnumRoleFieldUpdateOperationsInputSchemaObject)),
  createAt: Joi.alternatives().try(Joi.object().keys(DateTimeFieldUpdateOperationsInputSchemaObject)),
  tickets: Joi.object().keys(TicketUncheckedUpdateManyWithoutUserNestedInputSchemaObject),
  verify_tickets: Joi.object().keys(TicketUncheckedUpdateManyWithoutDriverNestedInputSchemaObject)
}