import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecase/authentication/remote-authentication_factory'
import { makeLoginValidation } from './login-validation-factory'
import { makeUpdateCurrentAccount } from '@/main/factories/usecase/update-current-account/local-update-current-account-factory'
import { Login } from '@/presentation/pages'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      updateCurrentAccount={makeUpdateCurrentAccount()}
    />
  )
}
