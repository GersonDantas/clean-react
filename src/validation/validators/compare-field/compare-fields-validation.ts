import { FieldValidation } from '@/validation/protocols/field-validation'
import { InvalidFieldError, RequiredFieldError } from '@/validation/errors'

export class CompareFieldsValidation implements FieldValidation {
  constructor(readonly field: string, readonly valueToCompare: string) {}

  validate(value: string): Error {
     return new InvalidFieldError()
  }
}
