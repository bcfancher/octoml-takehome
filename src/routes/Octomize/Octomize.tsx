import React, { useState } from 'react'

import {
  AccelerateOptions,
  BenchmarkOptions,
  OctomizeTargets,
  OctomizeQueue
} from './components'
import {
  AccelerateConfig,
  BenchmarkConfig,
  OctomizeTarget,
} from './types'
import './Octomize.scss'

export const Octomize = () => {
  const initialTargets: OctomizeTarget[] = []
  const [targets, setTargets] = useState(initialTargets)

  const initialBenchmarkConfig: BenchmarkConfig = { enabled: false }
  const [benchmarkConfig, setBenchmarkConfig] = useState(
    initialBenchmarkConfig
  )

  const initialAccelerateConfig: AccelerateConfig = { enabled: false }
  const [accelerateConfig, setAccelerateConfig] = useState(
    initialAccelerateConfig
  )

  const handleUpdateBenchmarkConfig = (config: BenchmarkConfig) => {
    setBenchmarkConfig(config)
  }

  const handleUpdateAccelerateConfig = (config: AccelerateConfig) => {
    setAccelerateConfig(config)
  }

  const handleAddTarget = () => {
    setTargets((targets) => {
      return [
        ...targets,
        {
          providerId: undefined,
          instanceTypeId: undefined,
        }
      ]
    })
  }

  const handleUpdateTarget = 
    (updatedIdx: number, updatedTarget: OctomizeTarget) => {
      setTargets((targets) => {
        return targets.map((target, idx) => {
          if (idx == updatedIdx) {
            return updatedTarget
          }

          return target
        })
      })
  }

  const handleRemoveTarget = (removedIdx: number) => {
    setTargets((targets) => {
      return targets.filter((_, idx) => idx !== removedIdx)
    })
  }

  return (
    <div className='octomize'>
      <div className='model'>
        <h2 className='model__filename'>Shufflenet-v2.onnx</h2>
        <p className='model__details'>Created 3 days ago by Mike Johnson</p>
      </div>

      <div className='launch'>

        <div className='launch__options'>
          <h3 className='launch__heading'>Octomize</h3>

          <BenchmarkOptions
            config={benchmarkConfig}
            onUpdateConfig={handleUpdateBenchmarkConfig}
          />

          <AccelerateOptions
            config={accelerateConfig}
            onUpdateConfig={handleUpdateAccelerateConfig}
          />

          <OctomizeTargets
            targets={targets}
            onAddTarget={handleAddTarget}
            onUpdateTarget={handleUpdateTarget}
            onRemoveTarget={handleRemoveTarget}
          />
        </div>

        <div className='launch__queue'>
          <OctomizeQueue
            targets={targets}
            benchmarkConfig={benchmarkConfig}
            accelerateConfig={accelerateConfig}
          />
        </div>
      </div>
    </div>
  )
}