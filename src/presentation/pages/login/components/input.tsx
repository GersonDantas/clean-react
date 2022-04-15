import { InputBase } from '@/presentation/components'
import { loginState } from './atoms'

import { useRecoilState } from 'recoil'
import React from 'react'

type Props = {
  type: string
  name: string
  placeholder: string
}

const Input: React.FC<Props> = (props: Props) => {
  const [state, setState] = useRecoilState(loginState)
  return (
    <InputBase {...props} state={state} setState={setState} />
  )
}

export default Input
