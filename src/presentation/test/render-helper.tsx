import { currentAccountState } from '@/presentation/components'
import { AccountModel } from '@/domain/models'
import { mockAccountModel } from '@/domain/test'

import { render } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { MemoryHistory } from 'history'
import { RecoilRoot } from 'recoil'
import React from 'react'

type Params = {
  Page: React.FC
  history: MemoryHistory
  account?: AccountModel
  location: string
}

type Result = {
  setCurrentAccountMock: (account: AccountModel) => void
}

export const renderWithHistory = ({ Page, account = mockAccountModel(), ...props }: Params): Result => {
  const setCurrentAccountMock = jest.fn()
  const mockedState = { setCurrentAccount: setCurrentAccountMock, getCurrentAccount: () => account }
  render(
    <RecoilRoot initializeState={({ set }) => set(currentAccountState, mockedState)}>
      <Router location={props.location} navigator={props.history}>
        <Page />
      </Router>
    </RecoilRoot>
  )
  return { setCurrentAccountMock }
}
