import React, { useContext } from 'react'

import { OctomizeTarget } from '../types'
import { ProviderContext } from '../ProvidersContext'

type TargetProps = {
  targets: OctomizeTarget[]
}

type QueueItem = {
  name: string | undefined
  vCPUs: number | undefined
  count: number
}

export const OctomizeQueue = ({ targets }: TargetProps) => {
  const providers = useContext(ProviderContext)

  const instanceTypeDict: Record<number, QueueItem> = {}
  let hasIncompleteTargets = false
  let totalRuns = 0
  targets.forEach(({ providerId, instanceTypeId }) => {
    if (!providerId || !instanceTypeId) {
      hasIncompleteTargets = true
    }
    else {
      if (!instanceTypeDict[instanceTypeId]) {
        const provider = providers.find(({ id }) => id === providerId)
        const { name, vCPUs } = provider?.instanceTypes.find(
          ({ id }) => id === instanceTypeId
        ) || {}
        instanceTypeDict[instanceTypeId] = { name, vCPUs, count: 0 }
      }

      instanceTypeDict[instanceTypeId].count++
      totalRuns++
    }
  })

  return (
    <>
      <div className='heading'>
        <h3>Total Runs</h3>
        <p>{totalRuns}</p>
      </div>

      {Object.entries(instanceTypeDict).map(([_, { name, vCPUs, count }]) => (
        <div className='instanceType'>
          <div className='desc'>
            <h4>{name}</h4>
            <span>{vCPUs} cores</span>
          </div>
          <span className='count'>{count}</span>
        </div>
      ))}

      {targets.length > 0 && !hasIncompleteTargets && (
        <button>Octomize</button>
      )}
    </>
  )
}
