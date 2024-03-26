import { useAppSelector, type RootState } from '../../store'
import config from '../../config.json'
import { useConfig } from '../../hooks'
import { ButtonOrder, PageOrder } from '../../types'
import { AmountLadder, AnswerGroup } from '../../components'

import './question-page.css'

interface QuestionPageProps {
  handleSetPage: (page: PageOrder) => void
}

export const QuestionPage: React.FC<QuestionPageProps> = ({ handleSetPage }) => {
  const currentLevel = useAppSelector((state: RootState) => state.level)
  const currentRound = useAppSelector((state: RootState) => state.round)

  const { correctAnswer, options, amountLadder } = useConfig(currentLevel.question)

  return (
    <div className="question-page-wrapper">
      <div className="question-part">
        <h2>{config[currentLevel.question].question}</h2>
        <AnswerGroup
          totalScore={amountLadder[currentLevel.question]}
          options={options}
          handleSetPage={handleSetPage}
          level={currentLevel.question}
          answer={currentRound.answer as ButtonOrder}
          correctAnswer={correctAnswer as ButtonOrder}
        />
      </div>
      <AmountLadder />
    </div>
  )
}
