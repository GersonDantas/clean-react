import { RemoteSurveyResultModel } from '@/data/models'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { SaveSurveyResult } from '@/domain/usecases'

export class RemoteSaveSurveyResult implements SaveSurveyResult {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteSaveSurveyResult.Model>
  ) { }

  async save (params: SaveSurveyResult.params): Promise<SaveSurveyResult.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'put',
      body: params
    })
    const remoteSurveysResult = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return Object.assign({}, remoteSurveysResult, { date: new Date(remoteSurveysResult.date) })
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteSaveSurveyResult {
  export type Model = RemoteSurveyResultModel
}
