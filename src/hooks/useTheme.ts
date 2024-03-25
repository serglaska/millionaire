import { ButtonAnswerStatus } from "../types"

export const useTheme = () => { 

  const colorFillMap = {
    [ButtonAnswerStatus.Wrong]: '#FDEEED',
    [ButtonAnswerStatus.Correct]: '#E6FAEA',
    [ButtonAnswerStatus.Inactive]: '#FFFFFF',
    [ButtonAnswerStatus.Selected]: '#FFF3EB',
  }
  
  const colorStrokeMap = {
    [ButtonAnswerStatus.Wrong]: '#EC6259',
    [ButtonAnswerStatus.Correct]: '#47D867',
    [ButtonAnswerStatus.Inactive]: '#D0D0D8',
    [ButtonAnswerStatus.Selected]: '#FF8B37',
  }
  
  return {
    colorFillMap,
    colorStrokeMap,
  }
}