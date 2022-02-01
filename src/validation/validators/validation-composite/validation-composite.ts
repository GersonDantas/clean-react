import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  constructor (private readonly validators: FieldValidation[]) { }

  static build (validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate (fieldName: string, input: object): string {
    const validators = this.validators.filter((v) => v.field === fieldName)
    // console.log(fieldValue)
    for (const validator of validators) {
      const error = validator.validate(input)
      // console.log(error)
      if (error) {
        return error.message
      }
    }
  }
}
