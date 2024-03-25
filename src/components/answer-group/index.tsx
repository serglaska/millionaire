import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { AnswerButton } from '../answer-button'
import { incrementLevel, takeAnswer } from '../../features'
import { ButtonAnswerStatus, ButtonOrder } from '../../types'

import './answer-group.css'

interface AnswerGroupProps {
  level: number
  answer: ButtonOrder
  options: Record<ButtonOrder, string>
  correctAnswer: ButtonOrder
}

export const AnswerGroup: React.FC<AnswerGroupProps> = ({
  level,
  answer,
  options,
  correctAnswer,
}) => {
  const dispatch = useDispatch()
  const [answerStatus, setAnswerStatus] = useState(ButtonAnswerStatus.Inactive)

  const handleSetStatus = (order: ButtonOrder) => {
    dispatch(takeAnswer(order))
  }

  useEffect(() => {
    let internalTimer:number
    const timer = setTimeout(() => {
      if (correctAnswer === answer) {
        setAnswerStatus(ButtonAnswerStatus.Correct)
        internalTimer = setTimeout(() => {
          dispatch(incrementLevel())
          dispatch(takeAnswer(''))
        }, 1000)
      } else {
        setAnswerStatus(ButtonAnswerStatus.Wrong)
      }
    }, 1000)

    return () => {
      console.log('clear')
      clearTimeout(timer)
      clearTimeout(internalTimer)
    }
  }, [answer, level, correctAnswer, dispatch])

  const optionsArray = Object.entries(options)

  return (
    <div className="answer-group">
      {optionsArray.map(([order, text]) => (
        <AnswerButton
          key={order}
          buttonText={text}
          buttonOrder={order as ButtonOrder}
          buttonStatus={order === answer ? answerStatus : ButtonAnswerStatus.Inactive}
          onClick={() => {
            setAnswerStatus(ButtonAnswerStatus.Selected)
            handleSetStatus(order as ButtonOrder)
          }}
        />
      ))}
    </div>
  )
}
