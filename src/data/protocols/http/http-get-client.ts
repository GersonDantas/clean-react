
export type HttpGetParams = {
  url: string
}

export class HttpGetClient {
  get: (params: HttpGetParams) => Promise<void>
}
