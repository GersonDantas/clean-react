import { type SaveSurveyResultModel } from '@/domain/models'

export interface SaveSurveyResult {
  save: (params: SaveSurveyResult.params) => Promise<SaveSurveyResult.Model>
}

export namespace SaveSurveyResult {
  export type params = {
    answer: string
  }

  export type Model = SaveSurveyResultModel
}
