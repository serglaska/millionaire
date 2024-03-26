import { FC, useEffect } from 'react'

import { Button, Hand, MainTitle } from '../../components'
import { ButtonContentType } from '../../types'

import { useAppDispatch } from '../../store'
import { clearLevelState } from '../../features'
import './total-score.css'

interface TotalScorePageProps {
  totalScore: string
  handleOnStartPage: () => void
}

export const TotalScorePage: FC<TotalScorePageProps> = ({ totalScore, handleOnStartPage }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
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
}
