import { type RemoteLoadSurveyResult } from '@/data/usecases'

import { faker } from '@faker-js/faker'

export const mockRemoteSurveyResultModel = (): RemoteLoadSurveyResult.Model => ({
  question: faker.lorem.words(10),
  date: faker.date.recent().toISOString(),
  answers: [{
    image: faker.internet.url(),
    answer: faker.lorem.word(),
    count: faker.helpers.rangeToNumber(1),
    percent: faker.helpers.rangeToNumber(100),
    isCurrentAccountAnswer: faker.datatype.boolean()
  }, {
    answer: faker.lorem.word(),
    count: faker.helpers.rangeToNumber(1),
    percent: faker.helpers.rangeToNumber(100),
    isCurrentAccountAnswer: faker.datatype.boolean()
  }]
})
