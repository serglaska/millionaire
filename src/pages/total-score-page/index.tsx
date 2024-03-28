import { FC, memo, useEffect } from 'react'

import { ButtonContentType } from '../../types'
import { clearLevelState } from '../../features'
import { Button, Hand, MainTitle } from '../../components'
import { RootState, useAppDispatch, useAppSelector } from '../../store'

import './total-score.css'

interface TotalScorePageProps {
  handleOnStartPage: () => void
}

export const TotalScorePage: FC<TotalScorePageProps> = memo(({ handleOnStartPage }) => {
  const dispatch = useAppDispatch()
  const totalScore = useAppSelector((state: RootState) => state.level.totalScore)

  useEffect(() => {
    return () => {
      console.log('total score page unmount')
      dispatch(clearLevelState())
    }
  }, [])

  return (
    <div className="total-page-wrapper">
      <Hand />
      <div className="title-wrapper">
        <p>Total Score</p>
        <MainTitle>{`${totalScore} earned`}</MainTitle>
        <Button onClick={handleOnStartPage}>{ButtonContentType.TryAgain}</Button>
      </div>
    </div>
  )
})
