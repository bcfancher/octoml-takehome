import React from 'react'

export const OctomizeTargets = () => (
  <section className='hardware'>
    <div className='hardware__heading'>
      <h4>Hardware Targets</h4>
      <button>Add</button>
    </div>

    <div className='hardware__grid'>
      <div className='header provider'>Provider</div>
      <div className='header'>Instance</div>
      <div className='header'>VCPU</div>
      <div className='header'>Memory (gib)</div>
      <div className='header'></div>

      <div className='line'></div>

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
      <div className='remove'><div></div></div>

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
      <div className='memory'>0</div>
      <div className='remove'><div></div></div>
    </div>
  </section>
)