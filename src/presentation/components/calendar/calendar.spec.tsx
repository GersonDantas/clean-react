import { Calendar } from '@/presentation/components'
import { render, screen } from '@testing-library/react'
import React from 'react'

const makeSut = (date: Date): void => {
  render(<Calendar date={date} />)
}

describe('SurveyItem Component', () => {
  test('Should render with correct values ', () => {
    makeSut(new Date('2022-03-19T16:00:00'))
    expect(screen.getByTestId('day')).toHaveTextContent('19')
    expect(screen.getByTestId('month')).toHaveTextContent('mar')
    expect(screen.getByTestId('year')).toHaveTextContent('2022')
  })

  test('Should render with correct values ', () => {
    makeSut(new Date('2018-07-03T16:00:00'))
    expect(screen.getByTestId('day')).toHaveTextContent('03')
    expect(screen.getByTestId('month')).toHaveTextContent('jul')
    expect(screen.getByTestId('year')).toHaveTextContent('2018')
  })
})
