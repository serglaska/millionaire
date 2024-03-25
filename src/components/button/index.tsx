import { ButtonContentType } from '../../types'
import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: ButtonContentType
}

export const Button: React.FC<ButtonProps> = props => {
  const { buttonText } = props

  return (
    <button className="button-wrapper" {...props}>
      {buttonText}
    </button>
  )
}
