import { FC, memo } from 'react'

import { clearLevelState } from '../../features'
import { ButtonContentType, PageOrder } from '../../types'
import { Button, Hand, MainTitle } from '../../components'
import { RootState, useAppDispatch, useAppSelector } from '../../store'

import './total-score.css'

interface TotalScorePageProps {
  handleOnStartPage: (page: PageOrder) => void
}

export const TotalScorePage: FC<TotalScorePageProps> = memo(({ handleOnStartPage }) => {
  const dispatch = useAppDispatch()
  const totalScore = useAppSelector((state: RootState) => state.level.totalScore)

  const handleOnTtyAgain = () => {
    handleOnStartPage(PageOrder.Start)
    dispatch(clearLevelState())
  }

  return (
    <div className="total-page-wrapper">
      <div className="hand-wrapper">
        <Hand />
      </div>
      <div className="title">
        <p className="total">Total Score</p>
        <MainTitle>{`${totalScore} earned`}</MainTitle>
        <Button onClick={handleOnTtyAgain}>{ButtonContentType.TryAgain}</Button>
      </div>
    </div>
  )
})
