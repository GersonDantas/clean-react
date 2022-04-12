import PrivateRoute from './private-route'
import { ApiContext } from '@/presentation/context'
import { mockAccountModel } from '@/domain/test'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render } from '@testing-library/react'
import { Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import { MakeSurveyList } from '@/main/factories/pages'
import { RecoilRoot } from 'recoil'

type SutTypes = {
  history: MemoryHistory
}

const makeSut = (account = mockAccountModel()): SutTypes => {
  const history = createMemoryHistory()
  render(
    <RecoilRoot>
      <ApiContext.Provider value={{ getCurrentAccount: () => account }}>
        <Router navigator={history} location='/' >
          <Routes>
            <Route path="/" element={<PrivateRoute />} >
              <Route path="" element={<MakeSurveyList />} />
            </Route >
          </Routes>
        </Router>
      </ApiContext.Provider>
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
