import React, { useContext, useRef } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/context/form/form'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const error = state[`${props.name}Error`]
  const inputRef = useRef<HTMLInputElement>()

  return (
    <div
      data-testid={`${props.name}-wrap`}
      className={Styles.inputWrap}
      data-status={error ? 'invalid' : 'valid'}
    >
      <input
        ref={inputRef}
        {...props}
        title={error}
        placeholder=" "
        data-testid={props.name}
        onFocus={(e) => { e.target.readOnly = false }}
        readOnly
        onChange={e => setState({ ...state, [e.target.name]: e.target.value })}
      />
      <label
        data-testid={`${props.name}-label`}
        onClick={() => inputRef.current.focus()}
        title={error}
      >
        {props.placeholder}
      </label>
    </div>
  )
}

export default Input
