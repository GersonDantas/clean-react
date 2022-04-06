import Styles from './survey-result-styles.scss'
import { Calendar, Error, Footer, Header, Loading } from '@/presentation/components'
import { LoadSurveyResult } from '@/domain/usecases'
import FlipMove from 'react-flip-move'
import React, { useState } from 'react'

const SurveyResult: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    error: '',
    surveyResult: null as LoadSurveyResult.Model
  })
  return (
    <div className={Styles.surveyResultWrap}>
      <Header />
      <div data-testid='survey-result' className={Styles.contentWrap}>
        {state.surveyResult &&
          <>
            <hgroup>
              <Calendar date={new Date()} className={Styles.calendarWrap} />
              <h2>Qual é seu framework web favorito?Qual é seu framework web favorito?</h2>
            </hgroup>
            <FlipMove className={Styles.answersList}>
              <li className={Styles.active}>
                <img src="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png" alt="react image" />
                <span className={Styles.answer}>ReactJs</span>
                <span className={Styles.percent}>50%</span>
              </li>
              <li>
                <img src="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png" alt="react image" />
                <span className={Styles.answer}>ReactJs</span>
                <span className={Styles.percent}>50%</span>
              </li>
              <li>
                <img src="https://bognarjunior.files.wordpress.com/2018/03/if_react-js_logo_1174949.png" alt="react image" />
                <span className={Styles.answer}>ReactJs</span>
                <span className={Styles.percent}>50%</span>
              </li>
            </FlipMove>
            <button>Voltar</button>
          </>
        }
        {state.isLoading && <Loading />}
        {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
        {state.error && <Error error={state.error} reload={() => { }} />}
      </div>
      <Footer />
    </div>
  )
}

export default SurveyResult
