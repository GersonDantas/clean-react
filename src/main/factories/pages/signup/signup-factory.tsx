import React from 'react'
import { makeSignUpValidation } from './signup-validation-factory'
import { makeUpdateCurrentAccount } from '@/main/factories/usecase/update-current-account/local-update-current-account-factory'
import { makeRemoteAddAccount } from '@/main/factories/usecase/add-account/remote-add-account'
import { SignUp } from '@/presentation/pages'

export const makeSignUp: React.FC = () => {
  return (
    <SignUp
      addAccount={makeRemoteAddAccount()}
      validation={makeSignUpValidation()}
      updateCurrentAccount={makeUpdateCurrentAccount()}
    />
  )
}
