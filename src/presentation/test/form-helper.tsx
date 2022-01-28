import { fireEvent, RenderResult } from '@testing-library/react'
import faker from 'faker'

export const testChildCount = (
  sut: RenderResult,
  fieldName: string,
  count: number
): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.childElementCount).toBe(count)
}

export const testButtonIsDIsabled = (
  sut: RenderResult,
  fieldName: string,
  isDisabled: boolean
): void => {
  const button = sut.getByTestId(fieldName) as HTMLButtonElement // fazendo cache para button
  expect(button.disabled).toBe(isDisabled)
}

export const testStatusForField = (
  sut: RenderResult,
  fieldName: string,
  validationError?: string
): void => {
  const fieldStatus = sut.getByTestId(`${fieldName}-status`)
  // console.log(fieldStatus.title, validationError)
  expect(fieldStatus.title).toBe(validationError || 'Tudo certo!')
  expect(fieldStatus.textContent).toBe(validationError ? '🔴' : '🟢')
}

export const populateField = (
  sut: RenderResult,
  fieldName: string,
  value = faker.internet.email()
): void => {
  const emailInput = sut.getByTestId(fieldName)
  fireEvent.input(emailInput, { target: { value } })
}

export const testElementExists = (
  sut: RenderResult,
  fieldName: string
): void => {
  const el = sut.getByTestId(fieldName)
  expect(el).toBeTruthy()
}

export const testElementText = (
  sut: RenderResult,
  fieldName: string,
  text: string
): void => {
  const el = sut.getByTestId(fieldName)
  expect(el.textContent).toBe(text)
}
