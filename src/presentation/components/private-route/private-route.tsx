import { ApiContext } from '@/presentation/context'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import React, { useContext } from 'react'

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps) => {
  const { getCurrentAccount } = useContext(ApiContext)
  return getCurrentAccount()?.accessToken
    ? <Route {...props} />
    : <Route {...props} component={() => <Redirect to="/login" />} />
}

export default PrivateRoute
