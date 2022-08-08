import {
  CloudInstanceTypeEntity,
  CloudProviderEntity,
} from "../../../lib/cloudProviders";
import { Provider, InstanceType } from '../types'

export const fromProvidersEntityArray =
  async (promise: Promise<CloudProviderEntity[]>): Promise<Provider[]> => {
    const providers = await promise

    return providers.map(
      (providerEntity) => ({
        id: providerEntity.id,
        name: providerEntity.name,
        instanceTypes: providerEntity.instanceTypes.map(
          (instanceEntity) => ({
            id: instanceEntity.id,
            name: instanceEntity.name,
            memory: instanceEntity.ramGb,
            vCPUs: instanceEntity.numCpus,
          } as InstanceType)
        )
      } as Provider)
    )
  }