import { FC } from 'react'

import { Amount } from '../amount'
import { useConfig } from '../../hooks'
import { RootState, useAppSelector } from '../../store'

import './amount-ladder.css'

const GRAY_COLOR = 'var(--gray-shape)'
const BLACK_COLOR = 'var(--black-100)'
const ORANGE_COLOR = 'var(--orange-100)'

const leaderStatus = {
  active: {
    color: ORANGE_COLOR,
    stroke: ORANGE_COLOR,
    colorShape: ORANGE_COLOR,
  },
  past: {
    color: GRAY_COLOR,
    stroke: GRAY_COLOR,
    colorShape: GRAY_COLOR,
  },
  future: {
    color: BLACK_COLOR,
    stroke: GRAY_COLOR,
    colorShape: GRAY_COLOR,
  },
}

const status = (level: number, index: number) => {
  switch (true) {
    case level === index:
      return 'active'
    case level < index:
      return 'future'
    case level > index:
    default:
      return 'past'
  }
}

export const AmountLadder: FC = () => {
  const { amountLadder } = useConfig(0)
  const level = useAppSelector((state: RootState) => state.level.question)

  return (
    <div className="amount-ladder-wrapper">
      {amountLadder.map((amount, index) => (
        <Amount
          key={amount}
          amount={amount}
          color={leaderStatus[status(level, index)].color}
          stroke={leaderStatus[status(level, index)].stroke}
          colorShape={leaderStatus[status(level, index)].colorShape}
        />
      ))}
    </div>
  )
}
