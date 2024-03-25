import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import type { RootState } from '../../store'
import config from '../../config.json'
import { useConfig } from '../../hooks'
import { ButtonAnswerStatus, ButtonOrder } from '../../types'
import { AmountLadder, AnswerGroup } from '../../components'
import { takeAnswer } from '../../features/roundSlice'

import './question-page.css'

export const QuestionPage: React.FC = () => {
  const currentLevel = useSelector((state: RootState) => state.level)
  const currentRound = useSelector((state: RootState) => state.round)

  const { correctAnswer, options } = useConfig(currentLevel.question)

  return (
    <div className="question-page-wrapper">
      <div className="question-part">
        <h2>{config[currentLevel.question].question}</h2>
        <AnswerGroup
          level={currentLevel.question}
          answer={currentRound.answer as ButtonOrder}
          correctAnswer={correctAnswer as ButtonOrder}
          options={options}
        />
      </div>
      <AmountLadder />
    </div>
  )
}
