import React, { useContext } from 'react'

import { BenchmarkConfig, AccelerateConfig, OctomizeTarget } from '../types'
import { ProviderContext } from '../ProvidersContext'
import { isValidConfig } from '../utils/isValidConfig'

type TargetProps = {
  targets: OctomizeTarget[]
  accelerateConfig: AccelerateConfig
  benchmarkConfig: BenchmarkConfig
}

type QueueItem = {
  name: string | undefined
  vCPUs: number | undefined
  count: number
}

export const OctomizeQueue = ({
  targets,
  accelerateConfig,
  benchmarkConfig,
}: TargetProps) => {
  const providers = useContext(ProviderContext)

  const instanceTypeDict: Record<number, QueueItem> = {}
  const registerRuns = (
    providerId: number,
    instanceTypeId: number,
    numRuns: number
  ) => {
    if (!instanceTypeDict[instanceTypeId]) {
      const provider = providers.find(({ id }) => id === providerId)
      const { name, vCPUs } = provider?.instanceTypes.find(
        ({ id }) => id === instanceTypeId
      ) || {}
      instanceTypeDict[instanceTypeId] = { name, vCPUs, count: 0 }
    }

    instanceTypeDict[instanceTypeId].count += numRuns
  }

  let hasIncompleteTargets = false
  let totalRuns = 0

  if (!benchmarkConfig.enabled && !accelerateConfig.enabled) {
    hasIncompleteTargets = true
  }

  if (benchmarkConfig.enabled) {
    if (isValidConfig(
      benchmarkConfig, ['engine','target','numTrials','runsPerTrial']
    )) {
      const { providerId, instanceTypeId } = benchmarkConfig.target || {}
      if (!providerId || !instanceTypeId) {
        hasIncompleteTargets = true
      }
      else {
        const { numTrials, runsPerTrial } = benchmarkConfig
        const runs = ( numTrials as number ) * ( runsPerTrial as number )
        registerRuns(providerId, instanceTypeId, runs)
        totalRuns += runs
      }
    }
  }

  if (accelerateConfig.enabled) {
    if (isValidConfig(accelerateConfig, ['engine','target'])) {
      const { providerId, instanceTypeId } = accelerateConfig.target || {}
      if (!providerId || !instanceTypeId) {
        hasIncompleteTargets = true
      }
      else {
        registerRuns(providerId, instanceTypeId, 1)
        totalRuns += 1
      }
    }
  }

  targets.forEach(({ providerId, instanceTypeId }) => {
    if (!providerId || !instanceTypeId) {
      hasIncompleteTargets = true
    }
    else {
      registerRuns(providerId, instanceTypeId, 1)
      totalRuns += 1
    }
  })

  return (
    <>
      <div className='heading'>
        <h3>Total Runs</h3>
        <p>{totalRuns}</p>
      </div>

      {Object.entries(instanceTypeDict).map(([_, { name, vCPUs, count }]) => (
        <div key={name} className='instanceType'>
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
