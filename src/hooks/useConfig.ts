import config from '../config.json'

interface UseConfig {
  level?: number | string
}

export const useConfig = (level: number) => {
  const correctAnswer = config[level].correctAnswer
  const options = config[level].options
  const award = config[level].award
  const amountLadder = config.map((level) => level.award)

  return {
    award,
    options,
    correctAnswer,
    amountLadder,
  }
}
