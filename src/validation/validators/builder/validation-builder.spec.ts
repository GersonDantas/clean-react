import { ValidationBuilder as sut } from './validation-builder'
import { EmailValidation, RequiredFieldValidation, MinLengthValidation } from '@/validation/validators'
import { CompareFieldsValidation } from '@/validation/validators/compare-field/compare-fields-validation'

import faker from 'faker'

describe('ValidationBuilder', () => {
  const field = faker.database.column()
  test('should return RequiredFieldValidation', () => {
    const validations = sut.field(field).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return EmailValidation', () => {
    const field = faker.database.column()

    const validations = sut.field(field).email().build()
    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('should return CompareFieldsValidation', () => {
    const field = faker.database.column()
    const fieldToCompare = faker.database.column()
    const validations = sut.field(field).sameAs(fieldToCompare).build()
    expect(validations).toEqual([new CompareFieldsValidation(field, fieldToCompare)])
  })

  test('should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()
    const validations = sut.field(field).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(field, length)])
  })

  test('should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number(18)
    const validations = sut.field(field).required().email().min(length).build()
    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new EmailValidation(field),
      new MinLengthValidation(field, length)
    ])
  })
})
