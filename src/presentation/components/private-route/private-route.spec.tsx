import PrivateRoute from './private-route'
import { currentAccountState } from '@/presentation/components'
import { mockAccountModel } from '@/domain/test'
import { MakeSurveyList } from '@/main/factories/pages'

import { createMemoryHistory, MemoryHistory } from 'history'
import { Route, Router, Routes } from 'react-router-dom'
import { render } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import React from 'react'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory()
  const mockedState = { setCurrentAccount: jest.fn(), getCurrentAccount: () => account }
  render(
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, mockedState)}>
      <Router navigator={history} location='/' >
        <Routes>
          <Route path="/" element={<PrivateRoute />} >
            <Route path="" element={<MakeSurveyList />} />
          </Route >
        </Routes>
      </Router>
    </RecoilRoot>
  )

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
