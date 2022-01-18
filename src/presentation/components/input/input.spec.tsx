import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import Input from '.'
import Context from '@/presentation/context/form'

const makeSut = (): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name="field"></Input>
    </Context.Provider>
  )
}

describe('Input component', () => {
  test('should begin with readOnly', () => {
    const sut = makeSut()
    const input = sut.getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
