import { inject, injectable } from 'inversify'
import { iCloudInstanceRepository } from '../../../base/repositories'
import { CloudInstanceTypeEntity } from '../../../entities'
import { iHttpClient } from '../../../../httpClient'

const PROVIDERS_BASE_URL = '/api/v1/cloud-instance-types'
const BASE_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

@injectable()
export class RestCloudInstanceTypeRepository implements iCloudInstanceRepository {
  constructor(
    @inject(iHttpClient)
    private httpClient: iHttpClient,
  ) {}

  public async getAllInstanceTypes(): Promise<CloudInstanceTypeEntity[]> {
    const allProvidersResponse = await this.httpClient.get({
      url: PROVIDERS_BASE_URL,
      headers: BASE_HEADERS,
    })

    const allProvidersJson = JSON.parse(allProvidersResponse.body ?? '') as CloudInstanceTypeEntity.jsonType[]

    return allProvidersJson.map(
      (provider) => new CloudInstanceTypeEntity(provider)
    )
  }
}
