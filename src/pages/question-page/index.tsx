import { useAppSelector, type RootState } from '../../store'
import config from '../../config.json'
import { useConfig, useDisplayViewSize } from '../../hooks'
import { ButtonOrder, PageOrder } from '../../types'
import { AmountLadder, AnswerGroup } from '../../components'

import './question-page.css'
import { DISPLAY_L_SIZE } from '../../constants'

interface QuestionPageProps {
  handleSetPage: (page: PageOrder) => void
}

export const QuestionPage: React.FC<QuestionPageProps> = ({ handleSetPage }) => {
  const currentLevel = useAppSelector((state: RootState) => state.level)
  const currentRound = useAppSelector((state: RootState) => state.round)
  const { displayWidth } = useDisplayViewSize()
  console.log(' -------------------------')
  console.log('displayWidth', displayWidth)
  console.log(' -------------------------')

  const isShowLadder = DISPLAY_L_SIZE <= displayWidth

  console.log(' ---------------------')
  // console.log('dimensions', dimensions)
  console.log(' ---------------------')
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
          correctAnswer={correctAnswer}
        />
      </div>
      {isShowLadder && <AmountLadder />}
    </div>
  )
}
