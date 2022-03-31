import { ApiContext } from '@/presentation/context'
import { Navigate } from 'react-router-dom'
import React, { useContext } from 'react'

const PrivateRoute: React.FC = ({ children }): any => {
  const { getCurrentAccount } = useContext(ApiContext)
  return getCurrentAccount()?.accessToken
    ? children
    : <Navigate to="/login" />
}

export default PrivateRoute
