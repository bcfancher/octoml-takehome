import React from 'react'
import { OctomizeTargets, OctomizeOptions, OctomizeQueue } from './components'

export const Octomize = () => (
  <>
    <h2>Shufflenet-v2.onnx</h2>
    <p>Created 3 days ago by Mike Johnson</p>

    <div>

      <div>
        <h3>Octomize</h3>

        <OctomizeOptions />
        <OctomizeTargets />
      </div>

      <div>
        <OctomizeQueue />
      </div>
    </div>
  </>
)