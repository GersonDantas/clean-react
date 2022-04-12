import { SubmitButtonBase } from '@/presentation/components'
import { loginState } from './atoms'
import { useRecoilValue } from 'recoil'
import React from 'react'

type Props = {
  text: string
}

const Button: React.FC<Props> = ({ text }: Props) => {
  const state = useRecoilValue(loginState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default Button
