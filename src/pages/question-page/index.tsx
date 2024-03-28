import { useEffect, useState } from 'react'

import config from '../../config.json'
import { DISPLAY_L_SIZE } from '../../constants'
import { ButtonOrder, PageOrder } from '../../types'
import { useConfig, useDisplayViewSize } from '../../hooks'
import { useAppSelector, type RootState } from '../../store'
import { AmountLadder, AnswerGroup, Header } from '../../components'

import './question-page.css'

interface QuestionPageProps {
  handleSetPage: (page: PageOrder) => void
}

export const QuestionPage: React.FC<QuestionPageProps> = ({ handleSetPage }) => {
  const currentLevel = useAppSelector((state: RootState) => state.level)
  const currentRound = useAppSelector((state: RootState) => state.round)
  const { displayWidth } = useDisplayViewSize()
  const [isShowSandwichBar, setIsShowSandwichBar] = useState<boolean>(true)
  const isMobile = DISPLAY_L_SIZE <= displayWidth
  const [isShowLadder, setIsShowLadder] = useState<boolean>(isMobile)
  const { correctAnswer, options, amountLadder, levels } = useConfig(currentLevel?.question)

  useEffect(() => {
    setIsShowLadder(isMobile)
  }, [isMobile])

  useEffect(() => {
    if (currentLevel?.question === levels[levels.length - 1]) {
      handleSetPage(PageOrder.Finish)
    }
  }, [currentLevel?.question, levels, handleSetPage, options])

  return (
    <div className="question-page-wrapper">
      <div className="question-part">
        {!isMobile && (
          <div className="header-wrapper">
            <Header
              isShowSandwichBar={isShowSandwichBar}
              setIsShowSandwichBar={setIsShowSandwichBar}
              setIsShowLadder={setIsShowLadder}
            />
          </div>
        )}
        <h2>{config[currentLevel.question]?.question}</h2>
        <AnswerGroup
          levels={levels}
          options={options}
          handleSetPage={handleSetPage}
          level={currentLevel?.question}
          correctAnswer={correctAnswer}
          answer={currentRound.answer as ButtonOrder}
          totalScore={amountLadder[currentLevel?.question]}
        />
      </div>
      {isShowLadder && <AmountLadder />}
    </div>
  )
}
