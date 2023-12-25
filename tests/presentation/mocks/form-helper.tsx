import { fireEvent, screen } from '@testing-library/react'
import { faker } from '@faker-js/faker'

export const testStatusForField = (
  fieldName: string,
  validationError: string = ''
): void => {
  const wrap = screen.getByTestId(`${fieldName}-wrap`)
  const field = screen.getByTestId(fieldName)
  const label = screen.getByTestId(`${fieldName}-label`)
  expect(wrap).toHaveAttribute('data-status', validationError ? 'invalid' : 'valid')
  expect(field).toHaveProperty('title', validationError)
  expect(label).toHaveProperty('title', validationError)
}

export const populateField = (
  fieldName: string,
  value = faker.internet.email()
): void => {
  const emailInput = screen.getByTestId(fieldName)
  fireEvent.input(emailInput, { target: { value } })
}
