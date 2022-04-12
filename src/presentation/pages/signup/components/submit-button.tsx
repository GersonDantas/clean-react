import { SubmitButtonBase } from '@/presentation/components'
import { signupState } from './atoms'
import { useRecoilState } from 'recoil'
import React from 'react'

type Props = {
  text: string
}

const Button: React.FC<Props> = ({ text }: Props) => {
  const [state] = useRecoilState(signupState)
  return (
    <SubmitButtonBase text={text} state={state} />
  )
}

export default Button
