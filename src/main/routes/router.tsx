import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters/current-account-adapter'
import { MakeLogin, MakeSignUp, MakeSurveyList, MakeSurveyResult } from '@/main/factories/pages'
import { ApiContext } from '@/presentation/context'
import { PrivateRoute } from '@/presentation/components'
import { RecoilRoot } from 'recoil'
import React from 'react'

const Router: React.FC = () => {
  return (
    <RecoilRoot >
      <ApiContext.Provider
        value={{
          setCurrentAccount: setCurrentAccountAdapter,
          getCurrentAccount: getCurrentAccountAdapter
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<MakeLogin />} />
            <Route path="/signup" element={<MakeSignUp />} />
            <Route path="/" element={<PrivateRoute />} >
              <Route path="" element={<MakeSurveyList />} />
              <Route path="surveys/:id" element={<MakeSurveyResult />} />
            </Route >
          </Routes>
        </BrowserRouter>
      </ApiContext.Provider>
    </RecoilRoot>
  )
}

export default Router
