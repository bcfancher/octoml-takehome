import React from 'react'

export const OctomizeTargets = () => (
  <section className='hardware'>
    <h4>Hardware Targets</h4>
    <button>Add</button>

    <div className='hardware__grid'>
      <div>Provider</div>
      <div>Instance</div>
      <div>VCPU</div>
      <div>Memory (gib)</div>

      <div>
        <select>
          <option>Select Provider</option>
          <option>AWS</option>
          <option>GCP</option>
        </select>
      </div>
      <div>
        <select>
          <option>Select Instance</option>
          <option>c4.large</option>
          <option>c4.xlarge</option>
          <option>c6g.large</option>
        </select>
      </div>
      <div>0</div>
      <div>0</div>
    </div>
  </section>
)