import { type LoadSurveyList } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

export const mockSurveyModel = (): LoadSurveyList.Model => ({
  id: faker.database.mongodbObjectId(),
  question: faker.lorem.words(10),
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent()
})

export const mockSurveyListModel = (): LoadSurveyList.Model[] => ([
  mockSurveyModel(),
  mockSurveyModel(),
  mockSurveyModel()
])

export class LoadSurveyListSpy implements LoadSurveyList {
  callsCount = 0
  surveys = mockSurveyListModel()

  async loadAll (): Promise<LoadSurveyList.Model[]> {
    this.callsCount++
    return this.surveys
  }
}
