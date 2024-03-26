import config from '../config.json'
import { ButtonOrder } from '../types'

export const useConfig = (level: number) => {
  const correctAnswer = config[level].correctAnswer as ButtonOrder[]
  const options = config[level].options
  const award = config[level].award
  const amountLadder = config.map((level) => level.award).reverse()

  return {
    award,
    options,
    correctAnswer,
    amountLadder,
  }
}
