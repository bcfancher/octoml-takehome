import React from 'react'

import { OctomizeTargets, OctomizeOptions, OctomizeQueue } from './components'
import './Octomize.scss'

export const Octomize = () => (
  <div className='octomize'>
    <div className='model'>
      <h2 className='model__filename'>Shufflenet-v2.onnx</h2>
      <p className='model__details'>Created 3 days ago by Mike Johnson</p>
    </div>

    <div className='launch'>

      <div className='launch__options'>
        <h3 className='launch__heading'>Octomize</h3>

        <OctomizeOptions />
        <OctomizeTargets />
      </div>

      <div className='launch__queue'>
        <OctomizeQueue />
      </div>
    </div>
  </div>
)