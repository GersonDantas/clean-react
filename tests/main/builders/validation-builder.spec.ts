import { ValidationBuilder as sut } from '@/main/builders'
import { RequiredFieldValidation, EmailValidation, MinLengthValidation, CompareFieldsValidation } from '@/validation/validators'
import { faker } from '@faker-js/faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const fieldName = faker.database.column()

    const validators = sut.field(fieldName).required().build()

    expect(validators).toEqual([new RequiredFieldValidation(fieldName)])
  })

  test('Should return EmailValidation', () => {
    const fieldName = faker.database.column()

    const validators = sut.field(fieldName).email().build()

    expect(validators).toEqual([new EmailValidation(fieldName)])
  })

  test('Should return MinLengthValidation', () => {
    const fieldName = faker.database.column()
    const length = faker.number.int(14)

    const validators = sut.field(fieldName).min(length).build()

    expect(validators).toEqual([new MinLengthValidation(fieldName, length)])
  })

  test('Should return CompareFieldValidation', () => {
    const fieldName = faker.database.column()
    const fieldToCompare = faker.lorem.words(7)

    const validators = sut.field(fieldName).sameAs(fieldToCompare).build()

    expect(validators).toEqual([new CompareFieldsValidation(fieldName, fieldToCompare)])
  })

  test('Should return validators', () => {
    const fieldName = faker.database.column()
    const fieldToCompare = faker.lorem.words(7)
    const length = faker.number.int(14)

    const validators = sut.field(fieldName).required().email().min(length).sameAs(fieldToCompare).build()

    expect(validators).toEqual([
      new RequiredFieldValidation(fieldName),
      new EmailValidation(fieldName),
      new MinLengthValidation(fieldName, length),
      new CompareFieldsValidation(fieldName, fieldToCompare)
    ])
  })
})
