import { ContainerModule, interfaces } from 'inversify'
import { GetAllProvidersAndInstanceTypes } from '../interactors'

export const cloudProvidersInteractorsIocModule = new ContainerModule(
  (bind: interfaces.Bind) => {
    bind(GetAllProvidersAndInstanceTypes).to(GetAllProvidersAndInstanceTypes)
  }
)