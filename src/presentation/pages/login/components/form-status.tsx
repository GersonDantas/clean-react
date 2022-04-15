import { FormStatusBase } from '@/presentation/components'
import { loginState } from './atoms'

import { useRecoilValue } from 'recoil'
import React from 'react'

const FormStatus: React.FC = () => {
  const state = useRecoilValue(loginState)
  return (
    <FormStatusBase state={state} />
  )
}

export default FormStatus
