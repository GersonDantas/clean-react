import { ValidationBuilder as sut } from '@/main/builders'
import { RequiredFieldValidation } from '@/validation/validators'
import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const email = faker.database.column()

    const validators = sut.field(email).required().build()

    expect(validators).toEqual([new RequiredFieldValidation(email)])
  })
})
