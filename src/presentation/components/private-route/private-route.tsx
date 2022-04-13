import { currentAccountState } from '@/presentation/components'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import React from 'react'

const PrivateRoute: React.FC = (): any => {
  const { getCurrentAccount } = useRecoilValue(currentAccountState)
  return getCurrentAccount()?.accessToken
    ? <Outlet />
    : <Navigate to="/login" />
}

export default PrivateRoute
