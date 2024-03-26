import { FC, memo, useEffect } from 'react'

import { Button, Hand, MainTitle } from '../../components'
import { ButtonContentType } from '../../types'

import { RootState, useAppDispatch, useAppSelector } from '../../store'
import { clearLevelState } from '../../features'
import './total-score.css'

interface TotalScorePageProps {
  handleOnStartPage: () => void
}

export const TotalScorePage: FC<TotalScorePageProps> = memo(({ handleOnStartPage }) => {
  const dispatch = useAppDispatch()
  const totalScore = useAppSelector((state: RootState) => state.level.totalScore)
  console.log('rerender', totalScore)

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
