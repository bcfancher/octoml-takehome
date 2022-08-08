import React, { useState } from 'react'

import { OctomizeTargets, OctomizeOptions, OctomizeQueue } from './components'
import { OctomizeTarget } from './types'
import './Octomize.scss'

export const Octomize = () => {
  const initialValue: OctomizeTarget[] = []
  const [targets, setTargets] = useState(initialValue)

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

          <OctomizeOptions />
          <OctomizeTargets
            targets={targets}
            onAddTarget={handleAddTarget}
            onUpdateTarget={handleUpdateTarget}
            onRemoveTarget={handleRemoveTarget}
          />
        </div>

        <div className='launch__queue'>
          <OctomizeQueue targets={targets} />
        </div>
      </div>
    </div>
  )
}