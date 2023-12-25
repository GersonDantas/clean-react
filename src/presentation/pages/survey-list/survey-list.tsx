import Styles from './survey-list-styles.scss'
import { SurveyListItem, surveyListState } from '@/presentation/pages/survey-list/components'
import { useErrorHandler } from '@/presentation/hooks'
import { Footer, Header, Error } from '@/presentation/components'
import { type LoadSurveyList } from '@/domain/usecases'

import { useRecoilState } from 'recoil'
import React, { useEffect } from 'react'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const handleError = useErrorHandler((error: Error) => {
    setState(old => ({ ...old, error: error.message }))
  })

  const [state, setState] = useRecoilState(surveyListState)

  const reload = (): void => { setState(old => ({ surveys: [], error: '', reload: !old.reload })) }

  useEffect(() => {
    loadSurveyList.loadAll()
      .then(surveys => { setState(old => ({ ...old, surveys })) })
      .catch(handleError)
  }, [state.reload])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        {state.error
          ? <Error error={state.error} reload={reload} />
          : <SurveyListItem surveys={state.surveys} />}
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
