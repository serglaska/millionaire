import { Vector } from './vector'
import { useTheme } from '../../hooks'
import { AnswerButtonShape } from './answer-button-shape'
import { ButtonAnswerStatus, ButtonOrder } from '../../types'

import './answer-button.css'

interface AnswerButtonProps {
  buttonText: string
  onClick: () => void
  buttonOrder: ButtonOrder
  buttonStatus: ButtonAnswerStatus
}

export const AnswerButton: React.FC<AnswerButtonProps> = (props) => {
  const { buttonOrder, buttonText, buttonStatus } = props

  const { colorFillMap, colorStrokeMap } = useTheme()

  return (
    <div className="answer-button" {...props}>
      <div className="text-wrapper">
        <p className="button-order">{buttonOrder}</p>
        <p className="button-text">{buttonText}</p>
      </div>
      <Vector stroke={colorStrokeMap[buttonStatus]} />
      <AnswerButtonShape fill={colorFillMap[buttonStatus]} stroke={colorStrokeMap[buttonStatus]} />
      <Vector stroke={colorStrokeMap[buttonStatus]} />
    </div>
  )
}
