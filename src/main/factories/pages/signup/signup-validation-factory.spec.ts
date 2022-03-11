import { EmailValidation, MinLengthValidation, RequiredFieldValidation, ValidationComposite } from '@/validation/validators'
import { CompareFieldsValidation } from '@/validation/validators/compare-field/compare-fields-validation'
import { makeSignUpValidation } from './signup-validation-factory'

describe('SignupValidationFactory', () => {
  test('should make ValidationComposite with correct validations ', () => {
    const composite = makeSignUpValidation()
    expect(composite).toEqual(
      ValidationComposite.build([
        new RequiredFieldValidation('name'),
        new MinLengthValidation('name', 5),
        new RequiredFieldValidation('email'),
        new EmailValidation('email'),
        new RequiredFieldValidation('password'),
        new MinLengthValidation('password', 5),
        new RequiredFieldValidation('passwordConfirmation'),
        new CompareFieldsValidation('passwordConfirmation', 'password')
      ])
    )
  })
})
