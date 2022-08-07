import { Container } from 'inversify'
import { setupServer, SetupServerApi } from 'msw/node'

import { GetAllProvidersAndInstanceTypes } from '.'
import {
  cloudProvidersInteractorsIocModule,
  restCloudProvidersIocModule,
} from '../'
import { fetchHttpClientIocModule } from '../../httpClient'
import { restMswHandler } from '../fixtures/Rest'

let interactor: GetAllProvidersAndInstanceTypes
let mswServer: SetupServerApi

beforeAll(() => {
  mswServer = setupServer(
    ...restMswHandler(),
  )
  mswServer.listen({
    onUnhandledRequest: 'error',
  })

  const container = new Container()
  container.load(
    fetchHttpClientIocModule,
    cloudProvidersInteractorsIocModule,
    restCloudProvidersIocModule,
  )

  interactor = container.get(GetAllProvidersAndInstanceTypes)
})

it('gets collated list of providers and instance types', async () => {
  const actual = await interactor.execute()

  console.log({ actual: actual.map((provider) => provider.toJsonString()) })

  expect(actual).toMatchSnapshot()
})
