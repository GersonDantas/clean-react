import { AuthorizeHttpClientDecorator } from '@/main/decorators'
import { GetStorageSpy, HttpClientSpy, mockHttpRequest } from '@/tests/data/mocks'
import { type HttpRequest } from '@/data/protocols/http'
import { mockAccountModel } from '@/tests/domain/mocks'

import { faker } from '@faker-js/faker'

type SutTypes = {
  sut: AuthorizeHttpClientDecorator
  getStorageSpy: GetStorageSpy
  httpClientSpy: HttpClientSpy
}

const makeSut = (): SutTypes => {
  const getStorageSpy = new GetStorageSpy()
  const httpClientSpy = new HttpClientSpy()
  const sut = new AuthorizeHttpClientDecorator(getStorageSpy, httpClientSpy)
  return {
    sut,
    getStorageSpy,
    httpClientSpy
  }
}

describe('AuthorizeHttpClientDecorator', () => {
  test('Should call GetStorage with correct values', async () => {
    const { sut, getStorageSpy } = makeSut()
    await sut.request(mockHttpRequest())
    expect(getStorageSpy.key).toBe('account')
  })

  test('Should not add headers if getStorage is invalid', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.helpers.arrayElement(['post', 'get', 'put', 'delete']),
      headers: {
        field: faker.lorem.words()
      }
    }
    await sut.request(httpRequest)
    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.method).toBe(httpRequest.method)
    expect(httpClientSpy.headers).toBe(httpRequest.headers)
  })

  test('Should add headers to HttpGetClient', async () => {
    const { sut, getStorageSpy, httpClientSpy } = makeSut()
    getStorageSpy.value = mockAccountModel()
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.helpers.arrayElement(['post', 'get', 'put', 'delete'])
    }
    await sut.request(httpRequest)
    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.method).toBe(httpRequest.method)
    expect(httpClientSpy.headers).toEqual({
      'x-access-token': getStorageSpy.value.accessToken
    })
  })

  test('Should merge headers to HttpGetClient', async () => {
    const { sut, getStorageSpy, httpClientSpy } = makeSut()
    getStorageSpy.value = mockAccountModel()
    const field = faker.lorem.words()
    const httpRequest: HttpRequest = {
      url: faker.internet.url(),
      method: faker.helpers.arrayElement(['post', 'get', 'put', 'delete']),
      headers: { field }
    }
    await sut.request(httpRequest)
    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.method).toBe(httpRequest.method)
    expect(httpClientSpy.headers).toEqual({
      field,
      'x-access-token': getStorageSpy.value.accessToken
    })
  })

  test('Should return the same result as HttpGetClient', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httResponse = await sut.request(mockHttpRequest())
    expect(httResponse).toEqual(httpClientSpy.response)
  })
})
