import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string) { }

  validate (input: object): Error {
    // console.log(value)
    return input[this.field] !== '' ? null : new RequiredFieldError()
  }
}
