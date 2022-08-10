import React, { SyntheticEvent, useContext, useRef } from 'react'
import Select from 'react-select'

import { ProviderContext } from '../ProvidersContext'
import { OctomizeTarget } from '../types'

type ItemProps = {
  idx: number
  target: OctomizeTarget
  onUpdateTarget: (updatedIdx: number, updatedTarget: OctomizeTarget) => void
  onRemoveTarget: (removedIdx: number,) => void
  showRemoveButton: boolean
  selectedInstances: Record<number, boolean>
}

export const OctomizeTargetsItem = ({
  idx,
  target,
  onUpdateTarget,
  onRemoveTarget,
  showRemoveButton,
  selectedInstances,
}: ItemProps) => {
  const providers = useContext(ProviderContext)

  const handleChangeProviderSelect = ({ value }: any) => {
    const updatedProviderId = value 
      ? parseInt(value , 10)
      : undefined
    onUpdateTarget(idx, {
      providerId: updatedProviderId,
      instanceTypeId: undefined,
    })
  }

  const handleChangeInstanceTypeSelect = ({ value }: any) => {
    const { providerId } = target
    const updatedInstanceTypeId = value
      ? parseInt(value , 10)
      : undefined

    onUpdateTarget(idx, {
      providerId: providerId,
      instanceTypeId: updatedInstanceTypeId,
    })
  }

  const handleRemoveTarget = () => {
    onRemoveTarget(idx)
  }

  const { providerId, instanceTypeId } = target

  let provider
  let instanceTypes
  let instanceType
  if (providerId) {
    provider = providers.find(({ id }) => id === providerId)
    instanceTypes = provider?.instanceTypes

    if (instanceTypeId) {
      instanceType = instanceTypes?.find(({id}) => id === instanceTypeId)
    }
  }

  const { vCPUs, memory } = instanceType || {}

  return (
    <>
      <div>
        <Select
          value={provider
            ? { value: `${provider.id}`, label: provider.name }
            : null}
          onChange={handleChangeProviderSelect}
          options={[
            {
              value: '',
              label: 'Select Provider'
            },
            ...providers.map(({id, name}) => ({
              value: `${id}`,
              label: name,
            }))
          ]}
        />
      </div>
      <div>
        <Select
          value={instanceType
            ? { value: `${instanceType.id}`, label: instanceType.name }
            : null}
          onChange={handleChangeInstanceTypeSelect}
          options={[
            {
              value: '',
              label: 'Select Instance'
            },
            ...(instanceTypes 
              ? instanceTypes
                .filter(({id}) => id === instanceTypeId || !selectedInstances[id])
                .map(({id, name}) => ({
                  value: `${id}`,
                  label: name,
                }))
              : [])
          ]}
        />
      </div>
      <div>{vCPUs || 0}</div>
      <div>{memory || 0}</div>
      <div className='remove'>
        {showRemoveButton ? (
          <div onClick={handleRemoveTarget}></div>
        ) : ('')}
      </div>
    </>
  )
}
