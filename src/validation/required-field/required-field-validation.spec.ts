import { RequiredFieldError } from '@/validation/errors'
import { RequiredFieldValidation } from './required-validation'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
  test('should return error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('should return false if field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
