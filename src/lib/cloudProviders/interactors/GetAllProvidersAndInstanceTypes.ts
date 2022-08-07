import { inject, injectable } from 'inversify'
import {
  iCloudInstanceRepository,
  iCloudProviderRepository
} from '../base/repositories'
import { CloudProviderEntity} from '../entities'

@injectable()
export class GetAllProvidersAndInstanceTypes {

  constructor(
    @inject(iCloudInstanceRepository)
    private instanceRepository: iCloudInstanceRepository,

    @inject(iCloudProviderRepository)
    private providerRepository: iCloudProviderRepository,
  ) {}

  async execute(): Promise<CloudProviderEntity[]> {
    const [
      allProviders,
      allInstances,
    ] = await Promise.all([
      this.providerRepository.getAllProviders(),
      this.instanceRepository.getAllInstanceTypes(),
    ])

    const providerDict = Object.fromEntries(
      allProviders.map((provider) => ([provider.id, provider]))
    )

    allInstances.forEach((instance) => {
      providerDict[instance.providerId].addInstance(instance)
    })
    
    return allProviders
  }
}
