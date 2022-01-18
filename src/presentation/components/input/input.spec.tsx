import React from 'react'
import { render } from '@testing-library/react'
import Input from '.'
import Context from '@/presentation/context/form'

describe('Input component', () => {
  test('should begin with readOnly', () => {
    const { getByTestId } = render(
      <Context.Provider value={{ state: {} }}>
        <Input name="field"></Input>)
      </Context.Provider>
    )
    const input = getByTestId('field') as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })
})
