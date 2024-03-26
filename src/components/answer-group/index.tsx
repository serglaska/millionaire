import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { AnswerButton } from '../answer-button'
import { ButtonAnswerStatus, ButtonOrder, PageOrder } from '../../types'
import { clearRoundState, incrementLevel, takeAnswer, updateTotalScore } from '../../features'

import './answer-group.css'

interface AnswerGroupProps {
  level: number
  totalScore: string
  answer: ButtonOrder
  options: Record<ButtonOrder, string>
  correctAnswer: ButtonOrder[]
  handleSetPage: (page: PageOrder) => void
}

export const AnswerGroup: React.FC<AnswerGroupProps> = ({
  level,
  answer,
  options,
  correctAnswer,
  handleSetPage,
  totalScore,
}) => {
  const dispatch = useDispatch()
  const [answerStatus, setAnswerStatus] = useState(ButtonAnswerStatus.Inactive)

  const handleSetStatus = (order: ButtonOrder) => {
    dispatch(takeAnswer(order))
  }

  useEffect(() => {
    let internalTimer: number
    const timer = setTimeout(() => {
      if (correctAnswer && answer && correctAnswer.includes(answer)) {
        setAnswerStatus(ButtonAnswerStatus.Correct)
        internalTimer = setTimeout(() => {
          dispatch(incrementLevel())
          dispatch(takeAnswer(''))
          dispatch(updateTotalScore(totalScore))
        }, 100)
      }

      if (correctAnswer && answer && !correctAnswer.includes(answer)) {
        setAnswerStatus(ButtonAnswerStatus.Wrong)
        handleSetPage(PageOrder.TotalScore)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      clearTimeout(internalTimer)
    }
  }, [answer, level, correctAnswer, dispatch, handleSetPage, totalScore])

  useEffect(() => {
    return () => {
      dispatch(clearRoundState())
    }
  }, [dispatch])

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
