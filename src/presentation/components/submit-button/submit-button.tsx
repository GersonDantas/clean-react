import React from 'react'

type Props = {
  text: string
  state: any
}

const SubmitButton: React.FC<Props> = ({ text, state }: Props) => {
  return (
    <button disabled={state.isFormInvalid} data-testid="submit" type="submit">
      {text}
    </button>
  )
}

export default SubmitButton
