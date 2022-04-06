import { ApiContext } from '@/presentation/context'
import { SurveyResult } from '@/presentation/pages'
import { mockAccountModel } from '@/domain/test'
import { waitFor, render, screen } from '@testing-library/react'
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const makeSut = (): void => {
  const history = createMemoryHistory({ initialEntries: ['/surveys'] })
  render(
    <ApiContext.Provider value={{ setCurrentAccount: jest.fn(), getCurrentAccount: () => mockAccountModel() }}>
      <Router navigator={history} location='/surveys' >
        <SurveyResult />
      </Router>
    </ApiContext.Provider>
  )
}

describe('SurveyResult Component', () => {
  test('Should present correct initial state', async () => {
    makeSut()
    const surveyResult = screen.getByTestId('survey-result')
    expect(surveyResult.childElementCount).toBe(0)
    expect(screen.queryByTestId('error')).not.toBeInTheDocument()
    expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    await waitFor(() => surveyResult)
  })
})
