import { fireEvent, screen } from '@testing-library/react'
import faker from 'faker'

export const testChildCount = (
  fieldName: string,
  count: number
): void => {
  const el = screen.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

export const testButtonIsDIsabled = (
  fieldName: string,
  isDisabled: boolean
): void => {
  const button: HTMLButtonElement = screen.getByTestId(fieldName) // fazendo cache para button
  expect(button.disabled).toBe(isDisabled)
}

export const testStatusForField = (
  fieldName: string,
  validationError: string = ''
): void => {
  const wrap = screen.getByTestId(`${fieldName}-wrap`)
  const field = screen.getByTestId(fieldName)
  const label = screen.getByTestId(`${fieldName}-label`)
  expect(wrap.getAttribute('data-status')).toBe(validationError ? 'invalid' : 'valid')
  expect(field.title).toBe(validationError)
  expect(label.title).toBe(validationError)
}

export const populateField = (
  fieldName: string,
  value = faker.internet.email()
): void => {
  const emailInput = screen.getByTestId(fieldName)
  fireEvent.input(emailInput, { target: { value } })
}

export const testElementExists = (
  fieldName: string
): void => {
  const el = screen.getByTestId(fieldName)
  expect(el).toBeTruthy()
}

export const testElementText = (
  fieldName: string,
  text: string
): void => {
  const el = screen.getByTestId(fieldName)
  expect(el.textContent).toBe(text)
}
