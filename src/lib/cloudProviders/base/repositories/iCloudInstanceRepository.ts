import { injectable } from 'inversify'
import { CloudInstanceTypeEntity } from '../../entities'

@injectable()
export abstract class iCloudInstanceRepository {
  abstract getAllInstanceTypes(): Promise<CloudInstanceTypeEntity[]>
}
