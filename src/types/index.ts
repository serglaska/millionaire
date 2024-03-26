export enum ButtonAnswerStatus {
  Wrong = 'Wrong',
  Correct = 'Correct',
  Inactive = 'Inactive',
  Selected = 'Selected',
}

const buttonOrder = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
} as const

export type ButtonOrder = keyof typeof buttonOrder

export enum ButtonContentType {
  Start = 'Start',
  TryAgain = 'Try again',
}

export enum PageOrder {
  Start = 'Start',
  Question = 'Question',
  Finish = 'Finish',
  TotalScore = 'TotalScore',
}
