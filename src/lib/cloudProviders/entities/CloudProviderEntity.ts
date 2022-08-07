import { BaseEntity, CloudInstanceTypeEntity } from '.'

class CloudProviderEntity extends BaseEntity {
  private _id: string
  private _key: string
  private _name: string
  private _instanceTypes: CloudInstanceTypeEntity[]

  constructor(input: CloudProviderEntity.jsonType) {
    super()
    this._id = input.id
    this._key = input.key
    this._name = input.name

    this._instanceTypes = (input.instanceTypes || []).map(
      (instance: CloudInstanceTypeEntity.jsonType) =>
        new CloudInstanceTypeEntity(instance, this),
    )
  }

  get id(): string {
    return this._id
  }

  get key(): string {
    return this._key
  }

  get name(): string {
    return this._name
  }

  get instanceTypes(): CloudInstanceTypeEntity[] {
    return this._instanceTypes
  }

  addInstance(instance: CloudInstanceTypeEntity): void {
    this._instanceTypes.push(instance)
    instance.setProvider(this)
  }
}

namespace CloudProviderEntity {
  export interface jsonType {
    id: string
    key: string
    name: string
    instanceTypes?: CloudInstanceTypeEntity.jsonType[]
  }
}

export default CloudProviderEntity
