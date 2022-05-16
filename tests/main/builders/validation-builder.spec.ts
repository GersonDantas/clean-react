import { ValidationBuilder as sut } from '@/main/builders'
import { RequiredFieldValidation, EmailValidation } from '@/validation/validators'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const field = faker.database.column()

    const validators = sut.field(field).required().build()

    expect(validators).toEqual([new RequiredFieldValidation(field)])
  })

  test('Should return EmailValidation', () => {
    const email = faker.database.column()

    const validators = sut.field(email).email().build()

    expect(validators).toEqual([new EmailValidation(email)])
  })
})
