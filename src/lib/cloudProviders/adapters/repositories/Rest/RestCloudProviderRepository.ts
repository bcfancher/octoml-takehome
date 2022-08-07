import { inject, injectable } from 'inversify'
import { iCloudProviderRepository } from '../../../base/repositories'
import { CloudProviderEntity } from '../../../entities'
import { iHttpClient } from '../../../../httpClient'

const PROVIDERS_BASE_URL = '/api/v1/cloud-providers'
const BASE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

@injectable()
export class RestCloudProviderRepository implements iCloudProviderRepository {
  constructor(
    @inject(iHttpClient)
    private httpClient: iHttpClient,
  ) {}

  public async getAllProviders(): Promise<CloudProviderEntity[]> {
    const allProvidersResponse = await this.httpClient.get({
      url: PROVIDERS_BASE_URL,
      headers: BASE_HEADERS,
    })

    const allProvidersJson = JSON.parse(allProvidersResponse.body ?? '') as CloudProviderEntity.jsonType[]

    return allProvidersJson.map(
      (provider) => new CloudProviderEntity(provider)
    )
  }
}
