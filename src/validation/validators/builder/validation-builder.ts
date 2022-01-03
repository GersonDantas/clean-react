import { FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldValidation } from '@/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  // vai retornar um ValidationBuilder (this) para podermos chamarmos um método após o outro
  required(): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
