import { RequiredFieldValidation, ValidationBuilder } from '@/validation/validators'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const validators = ValidationBuilder.field('any_field').required().build()
    expect(validators).toEqual([new RequiredFieldValidation('any_field')])
  })
})
