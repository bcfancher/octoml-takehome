import React from 'react'

import { OctomizeTarget } from '../types'
import { OctomizeTargetsItem } from './OctomizeTargetsItem'

type TargetProps = {
  targets: OctomizeTarget[]
  onAddTarget: () => void
  onUpdateTarget: (updatedIdx: number, updatedTarget: OctomizeTarget) => void
  onRemoveTarget: (removedIdx: number,) => void
}

export const OctomizeTargets = 
({ targets, onAddTarget, onUpdateTarget, onRemoveTarget }: TargetProps) => {

  return (
    <section className='hardware'>
      <div className='hardware__heading'>
        <h4>Hardware Targets</h4>
        <button onClick={onAddTarget}>Add</button>
      </div>

      <div className='hardware__grid'>
        <div className='header provider'>Provider</div>
        <div className='header'>Instance</div>
        <div className='header'>VCPU</div>
        <div className='header'>Memory (gib)</div>
        <div className='header'></div>

        <div className='line'></div>

        {targets.length > 0 ? targets.map((target, idx) => (
          <OctomizeTargetsItem
            idx={idx}
            key={`${idx}-${target.providerId}-${target.instanceTypeId}`}
            target={target}
            onUpdateTarget={onUpdateTarget}
            onRemoveTarget={onRemoveTarget}
            showRemoveButton={targets.length > 1}
          />
        )) : (
          <div className='no-records'>
            click 'Add' button to add a target
          </div>
        )}
      </div>
    </section>
  )
}