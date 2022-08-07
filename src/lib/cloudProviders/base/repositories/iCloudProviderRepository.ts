import { injectable } from 'inversify'
import { CloudProviderEntity } from '../../entities'

@injectable()
export abstract class iCloudProviderRepository {
  abstract getAllProviders(): Promise<CloudProviderEntity[]>
}
