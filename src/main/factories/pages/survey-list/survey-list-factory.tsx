import { makeRemoteLoadSurveyList } from '@/main/factories/usecase'
import { SurveyList } from '@/presentation/pages'

import React from 'react'

export const MakeSurveyList: React.FC = () => {
  return (
    <SurveyList
      loadSurveyList={makeRemoteLoadSurveyList()}
    />
  )
}
