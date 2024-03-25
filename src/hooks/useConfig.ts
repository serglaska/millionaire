import config from '../config.json'

const amountLadder = [
  '$1,000,000',
  '$500,000',
  '$250,000',
  '$125,000',
  '$64,000',
  '$32,000',
  '$16,000',
  '$8,000',
  '$4,000',
  '$2,000',
  '$1,000',
  '$500',
]

interface UseConfig {
  level?: number | string
}

export const useConfig = (level: number) => {
  const correctAnswer = config[level].correctAnswer
  const options = config[level].options

  return {
    options,
    correctAnswer,
    amountLadder,
  }
}
