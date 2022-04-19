import { currentAccountState } from '@/presentation/components'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/tests/domain/mocks'

import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { MutableSnapshot, RecoilRoot, RecoilState } from 'recoil'
import React from 'react'

type Params = {
  Page: React.FC
  history: MemoryHistory
  account?: AccountModel
  location: string
  states?: Array<{ atom: RecoilState<any>, value: any }>
}

type Result = {
  setCurrentAccountMock: (account: AccountModel) => void
}

export const renderWithHistory = ({ Page, account = mockAccountModel(), states = [], ...props }: Params): Result => {
  const setCurrentAccountMock = jest.fn()
  const mockedState = { setCurrentAccount: setCurrentAccountMock, getCurrentAccount: () => account }
  const initializeState = ({ set }: MutableSnapshot): void => {
    [...states, { atom: currentAccountState, value: mockedState }].forEach(state => set(state.atom, state.value))
  }
  render(
    <RecoilRoot initializeState={initializeState}>
      <Router location={props.location} navigator={props.history}>
        <Page />
      </Router>
    </RecoilRoot>
  )
  return { setCurrentAccountMock }
}
