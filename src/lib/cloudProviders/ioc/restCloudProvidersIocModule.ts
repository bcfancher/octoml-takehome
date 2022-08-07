import { ContainerModule, interfaces } from 'inversify'
import {
  iCloudInstanceRepository,
  iCloudProviderRepository,
} from '../base/repositories'
import {
  RestCloudInstanceTypeRepository,
  RestCloudProviderRepository,
} from '../adapters'

export const restCloudProvidersIocModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind(iCloudInstanceRepository).to(RestCloudInstanceTypeRepository)
    bind(iCloudProviderRepository).to(RestCloudProviderRepository)
  }
)