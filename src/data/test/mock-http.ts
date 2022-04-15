import {
  HttpRequest,
  HttpResponse,
  HttpStatusCode,
  HttpClient,
  HttpMethod
} from '@/data/protocols/http'

import faker from 'faker'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['post', 'get', 'put', 'delete']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
})

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string
  method: HttpMethod
  body?: any
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request (data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.headers = data.headers
    this.body = data.body
    return Promise.resolve(this.response)
  }
}
