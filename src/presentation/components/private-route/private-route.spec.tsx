import PrivateRoute from './private-route'
import { renderWithHistory } from '@/presentation/test'
import { mockAccountModel } from '@/domain/test'
import { MakeSurveyList } from '@/main/factories/pages'

import { createMemoryHistory, MemoryHistory } from 'history'
import { Route, Routes } from 'react-router-dom'
import React from 'react'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory()
  renderWithHistory({
    Page: () =>
      <Routes>
        <Route path="/" element={<PrivateRoute />} >
          <Route path="" element={<MakeSurveyList />} />
        </Route >
      </Routes>,
    account,
    history,
    location: '/'
  })

  return {
    history
  }
}

describe('PrivateRoute', () => {
  test('Should redirect to /login if token is empty ', () => {
    const { history } = makeSut(null)
    expect(history.location.pathname).toBe('/login')
  })

  test('Should render current component if token is not empty ', () => {
    const { history } = makeSut()
    expect(history.location.pathname).toBe('/')
  })
})
