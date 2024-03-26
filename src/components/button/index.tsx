import { FC } from 'react'

import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = (props) => {
  const { children } = props

  return (
    <button className="button-wrapper" {...props}>
      {children}
    </button>
  )
}
