import { ApiContext } from '@/presentation/context'
import { Navigate, Outlet } from 'react-router-dom'
import React, { useContext } from 'react'

const PrivateRoute: React.FC = (): any => {
  const { getCurrentAccount } = useContext(ApiContext)
  return getCurrentAccount()?.accessToken
    ? <Outlet />
    : <Navigate to="/login" />
}

export default PrivateRoute
