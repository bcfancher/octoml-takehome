export type Provider = {
  id: number
  name: string
  instanceTypes: InstanceType[]
}

export type InstanceType = {
  id: number
  name: string
  memory: number
  vCPUs: number
}

export type OctomizeTarget = {
  providerId: number | undefined
  instanceTypeId: number | undefined
}