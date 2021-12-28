import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/context/form'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: React.FC<Props> = (props: Props) => {
  const { errorState } = useContext(Context)
  const error = errorState[`${props.name}Error`]
  const enableInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getError = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} onFocus={enableInput} readOnly />
      <span
        data-testid={`${props.name}-status`}
        title={getError()}
        className={Styles.status}
      >
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
