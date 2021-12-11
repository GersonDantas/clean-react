export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  unathorized = 401,
  badRequest = 400,
  notfound = 404,
  serverError = 500
}

export type HttpResponse<T> = {
  statusCode: HttpStatusCode
  body?: T
}
