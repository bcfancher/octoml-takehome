import { BaseEntity, CloudProviderEntity } from '.'

class CloudInstanceTypeEntity extends BaseEntity {
  private _id: number
  private _providerId: number
  private _key: string
  private _name: string
  private _numCpus: number
  private _ramGb: number
  private _provider?: CloudProviderEntity

  constructor(
    input: CloudInstanceTypeEntity.jsonType,
    provider?: CloudProviderEntity
  ) {
    super()
    this._id = input.id
    this._providerId = input.providerId
    this._key = input.key
    this._name = input.name
    this._numCpus = input.numCpus
    this._ramGb = input.ramGb

    if (provider) {
      this._provider = provider
    }
    else if (input.provider) {
      this._provider = new CloudProviderEntity(input.provider)
    }
  }

  get id(): number {
    return this._id
  }

  get providerId(): number {
    return this._providerId
  }

  get key(): string {
    return this._key
  }

  get name(): string {
    return this._name
  }

  get numCpus(): number {
    return this._numCpus
  }

  get ramGb(): number {
    return this._ramGb
  }

  get provider(): CloudProviderEntity | undefined {
    return this._provider
  }

  setProvider(provider: CloudProviderEntity): void {
    this._provider = provider
  }
}

namespace CloudInstanceTypeEntity {
  export interface jsonType {
    id: number
    providerId: number
    key: string
    name: string
    numCpus: number
    ramGb: number
    provider?: CloudProviderEntity.jsonType
  }
}

export default CloudInstanceTypeEntity
