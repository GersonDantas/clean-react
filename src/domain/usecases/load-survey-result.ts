export interface LoadSurveyResult {
  loadAll (): Promise<LoadSurveyResult.Model[]>
}

type AnswersType = {
  image?: string
  answer: string
  count: number
  percent: number
}

export namespace LoadSurveyResult {
  export type Model = {
    question: string
    date: Date
    answers: AnswersType[]
  }
}
