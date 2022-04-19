import { mockSurveyModel } from '@/tests/domain/mocks'
import { IconName } from '@/presentation/components'
import { SurveyItem } from '@/presentation/pages/survey-list/components'
import { renderWithHistory } from '@/tests/presentation/mocks'

import { fireEvent, screen } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (survey = mockSurveyModel()): SutTypes => {
  const history = createMemoryHistory()
  renderWithHistory({
    Page: () => SurveyItem({ survey }),
    history,
    location: '/'
  })

  return {
    history
  }
}

describe('SurveyItem Component', () => {
  test('Should render with correct values ', () => {
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

  test('Should render with correct values ', () => {
    const survey = Object.assign(mockSurveyModel(), {
      didAnswer: false,
      date: new Date('2018-07-03T16:00:00')
    })
    makeSut(survey)
    expect(screen.getByTestId('icon')).toHaveProperty('src', IconName.thumbDown)
    expect(screen.getByTestId('question')).toHaveTextContent(survey.question)
    expect(screen.getByTestId('day')).toHaveTextContent('03')
    expect(screen.getByTestId('month')).toHaveTextContent('jul')
    expect(screen.getByTestId('year')).toHaveTextContent('2018')
  })

  test('Should got to SurveyResult', () => {
    const survey = mockSurveyModel()
    const { history } = makeSut(survey)
    fireEvent.click(screen.getByTestId('link'))
    expect(history.location.pathname).toBe(`/surveys/${survey.id}`)
  })
})
