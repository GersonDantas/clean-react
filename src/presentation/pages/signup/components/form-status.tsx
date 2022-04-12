import { FormStatusBase } from '@/presentation/components'
import { signupState } from './atoms'
import { useRecoilState } from 'recoil'
import React from 'react'

const FormStatus: React.FC = () => {
  const [state] = useRecoilState(signupState)
  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
