import config from '../config.json'
import { ButtonOrder } from '../types'

export const useConfig = (level: number) => {
  const correctAnswer = config[level]?.correctAnswer as ButtonOrder[]
  const options = config[level]?.options
  const amountLadder = config.map((level) => level.award)
  const levels = config.map((el) => el.level)

  return {
    levels,
    options,
    correctAnswer,
    amountLadder,
  }
}
