import { SubmitButtonBase } from '@/presentation/components'
import { loginState } from './atoms'
import { useRecoilState } from 'recoil'
import React from 'react'

type Props = {
  text: string
}

const Button: React.FC<Props> = ({ text }: Props) => {
  const [state] = useRecoilState(loginState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default Button
