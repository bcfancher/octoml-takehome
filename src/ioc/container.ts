import { Container } from 'inversify'
import {
  cloudProvidersInteractorsIocModule,
  restCloudProvidersIocModule,
} from '../lib/cloudProviders/ioc'
import { fetchHttpClientIocModule } from '../lib/httpClient/ioc'

export const container = new Container()
container.load(
  cloudProvidersInteractorsIocModule,
  restCloudProvidersIocModule,
  fetchHttpClientIocModule,
)
