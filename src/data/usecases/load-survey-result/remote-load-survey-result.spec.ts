import { HttpStatusCode } from '@/data/protocols/http'
import { HttpGetClientSpy } from '@/data/test'
import { RemoteLoadSurveyResult } from '@/data/usecases'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import faker from 'faker'

type SutType = {
  sut: RemoteLoadSurveyResult
  httpGetClientSpy: HttpGetClientSpy
}

const makeSut = (url = faker.internet.url()): SutType => {
  const httpGetClientSpy = new HttpGetClientSpy()
  const sut = new RemoteLoadSurveyResult(url, httpGetClientSpy)
  return {
    sut,
    httpGetClientSpy
  }
}

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpGetClient with correct values ', async () => {
    const url = faker.internet.url()
    const { sut, httpGetClientSpy } = makeSut(url)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should throw AccessDeniedError if HttpGetClient returns 403', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.load()
    expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw AccessDeniedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load()
    expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw AccessDeniedError if HttpGetClient returns 404', async () => {
    const { sut, httpGetClientSpy } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.load()
    expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
