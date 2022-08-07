import { ContainerModule, interfaces } from 'inversify'
import { iHttpClient } from '../base'
import { FetchHttpClient } from '../adapters'

export const fetchHttpClientIocModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind(iHttpClient).to(FetchHttpClient)
  }
)