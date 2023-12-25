import { type FieldValidation } from '@/validation/protocols/field-validation'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation, CompareFieldsValidation } from '@/validation/validators'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) { }

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  // vai retornar um ValidationBuilder (this) para podermos chamarmos um método após o outro
  required (): this {
    this.validations.push(new RequiredFieldValidation(this.fieldName))
    return this
  }

  email (): this {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  min (length: number): this {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  sameAs (fieldToCompare: string): this {
    this.validations.push(new CompareFieldsValidation(this.fieldName, fieldToCompare))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}
