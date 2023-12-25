import { type RemoteLoadSurveyList } from '@/data/usecases'

import { faker } from '@faker-js/faker'

export const mockRemoteSurveyModel = (): RemoteLoadSurveyList.Model => ({
  id: faker.database.mongodbObjectId(),
  question: faker.lorem.words(10),
  didAnswer: faker.datatype.boolean(),
  date: faker.date.recent().toISOString()
})

export const mockRemoteSurveyListModel = (): RemoteLoadSurveyList.Model[] => ([
  mockRemoteSurveyModel(),
  mockRemoteSurveyModel(),
  mockRemoteSurveyModel()
])
