import { type LoadSurveyResult, type SaveSurveyResult } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

export const mockSaveSurveyResultParams = (): SaveSurveyResult.params => ({
  answer: faker.lorem.words(10)
})

export const mockSurveyResultModel = (): LoadSurveyResult.Model => ({
  question: faker.lorem.words(10),
  date: faker.date.recent(),
  answers: [{
    image: faker.internet.url(),
    answer: faker.lorem.words(10),
    count: faker.helpers.rangeToNumber(1),
    percent: faker.helpers.rangeToNumber(100),
    isCurrentAccountAnswer: true
  }, {
    answer: faker.lorem.words(5),
    count: faker.helpers.rangeToNumber(1),
    percent: faker.helpers.rangeToNumber(100),
    isCurrentAccountAnswer: false
  }]
})

export class LoadSurveyResultSpy implements LoadSurveyResult {
  callsCount = 0
  surveyResults = mockSurveyResultModel()

  async load (): Promise<LoadSurveyResult.Model> {
    this.callsCount++
    return this.surveyResults
  }
}

export class SaveSurveyResultSpy implements SaveSurveyResult {
  callsCount = 0
  params: SaveSurveyResult.params
  surveyResults = mockSurveyResultModel()

  async save (params: SaveSurveyResult.params): Promise<SaveSurveyResult.Model> {
    this.callsCount++
    this.params = params
    return this.surveyResults
  }
}
