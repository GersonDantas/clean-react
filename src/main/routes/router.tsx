import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '@/main/adapters/current-account-adapter'
import { MakeLogin, MakeSignUp, MakeSurveyList } from '@/main/factories/pages'
import { ApiContext } from '@/presentation/context'
import { PrivateRoute } from '@/presentation/components'
import React from 'react'

const Router: React.FC = () => {
  return (
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
          <Route
            path="/"
            element={
              <PrivateRoute>
                <MakeSurveyList />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  )
}

export default Router
