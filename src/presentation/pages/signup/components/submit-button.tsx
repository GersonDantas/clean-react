import { SubmitButtonBase } from '@/presentation/components'
import { signupState } from './atoms'

import { useRecoilValue } from 'recoil'
import React from 'react'

type Props = {
  text: string
}

const Button: React.FC<Props> = ({ text }: Props) => {
  const state = useRecoilValue(signupState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default Button
