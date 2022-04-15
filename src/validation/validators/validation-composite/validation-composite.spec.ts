import { FieldValidationSpy } from '@/validation/test'
import { ValidationComposite } from './validation-composite'

import faker from 'faker'

type SutTypes = {
  sut: ValidationComposite
  fieldValidationSpy: FieldValidationSpy[]
}

const makeSut = (fieldName: string): SutTypes => {
  const fieldValidationSpy = [new FieldValidationSpy(fieldName), new FieldValidationSpy(fieldName)]
  const sut = ValidationComposite.build(fieldValidationSpy)
  return {
    sut,
    fieldValidationSpy
  }
}

describe('ValidationComposite', () => {
  test('should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut, fieldValidationSpy } = makeSut(fieldName)
    const errorMessage = faker.random.words()
    fieldValidationSpy[0].error = new Error(errorMessage)
    fieldValidationSpy[1].error = new Error(faker.random.words())
    const error = sut.validate(fieldName, { [fieldName]: faker.random.words() })
    expect(error).toEqual(error)
  })

  test('should return error if any validation fails', () => {
    const fieldName = faker.database.column()
    const { sut } = makeSut(fieldName)
    const error = sut.validate(fieldName, { [fieldName]: faker.random.words() })
    expect(error).toBeFalsy()
  })
})
