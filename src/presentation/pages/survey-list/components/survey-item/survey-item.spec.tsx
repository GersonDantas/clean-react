import { mockSurveyModel } from '@/domain/test'
import { IconName } from '@/presentation/components'
import { SurveyItem } from '@/presentation/pages/survey-list/components'
import { render, screen } from '@testing-library/react'
import React from 'react'

const makeSut = (survey = mockSurveyModel()): void => {
  render(<SurveyItem survey={survey} />)
}

describe('SurveyItem Component', () => {
  test('Should render with corret values ', () => {
    const survey = Object.assign(mockSurveyModel(), {
      didAnswer: true,
      date: new Date('2022-03-19T16:00:00')
    })
    makeSut(survey)
    expect(screen.getByTestId('icon')).toHaveProperty('src', IconName.thumbUp)
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('19')
    expect(screen.getByTestId('month')).toHaveTextContent('mar')
    expect(screen.getByTestId('year')).toHaveTextContent('2022')
  })
})
