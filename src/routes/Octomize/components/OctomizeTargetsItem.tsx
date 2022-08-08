import React, { SyntheticEvent, useContext, useRef } from 'react'

import { ProviderContext } from '../ProvidersContext'
import { OctomizeTarget } from '../types'

type ItemProps = {
  idx: number
  target: OctomizeTarget
  onUpdateTarget: (updatedIdx: number, updatedTarget: OctomizeTarget) => void
  onRemoveTarget: (removedIdx: number,) => void
  showRemoveButton: boolean
}

export const OctomizeTargetsItem = ({
  idx,
  target,
  onUpdateTarget,
  onRemoveTarget,
  showRemoveButton,
}: ItemProps) => {
  const providers = useContext(ProviderContext)
  const providerSelect = useRef<HTMLSelectElement>(null)
  const instanceTypeSelect = useRef<HTMLSelectElement>(null)

  const handleRemoveTarget = () => {
    onRemoveTarget(idx)
  }

  const handleChangeProviderSelect = () => {
    const updatedProviderId = providerSelect.current?.value 
      ? parseInt(providerSelect.current?.value , 10)
      : undefined
    onUpdateTarget(idx, {
      providerId: updatedProviderId,
      instanceTypeId: undefined,
    })
  }

  const handleChangeInstanceTypeSelect = () => {
    const { providerId } = target
    const updatedInstanceTypeId = instanceTypeSelect.current?.value 
      ? parseInt(instanceTypeSelect.current?.value , 10)
      : undefined

    onUpdateTarget(idx, {
      providerId: providerId,
      instanceTypeId: updatedInstanceTypeId,
    })
  }


  const { providerId, instanceTypeId } = target

  let instanceTypes
  let instanceType
  if (providerId) {
    const provider = providers.find(({ id }) => id === providerId)
    instanceTypes = provider?.instanceTypes

    if (instanceTypeId) {
      instanceType = instanceTypes?.find(({id}) => id === instanceTypeId)
    }
  }

  const { vCPUs, memory } = instanceType || {}

  return (
    <>
      <div>
        <select
          ref={providerSelect}
          value={providerId}
          onChange={handleChangeProviderSelect}
        >
          <option value=''>Select Provider</option>
          {providers.map(({id, name}) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <select
          ref={instanceTypeSelect}
          value={instanceTypeId}
          onChange={handleChangeInstanceTypeSelect}
        >
          <option value=''>Select Instance</option>
          {instanceTypes && instanceTypes.map(({id, name}) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
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
