import React from 'react'

export const OctomizeQueue = () => (
  <>
    <div className='heading'>
      <h3>Total Runs</h3>
      <p>3</p>
    </div>

    <div className='instanceType'>
      <div className='desc'>
        <h4>c4.large</h4>
        <span>2 cores</span>
      </div>
      <span className='count'>1</span>
    </div>

    <div className='instanceType'>
      <div className='desc'>
        <h4>c4.xlarge</h4>
        <span>4 cores</span>
      </div>
      <span className='count'>1</span>
    </div>

    <div className='instanceType'>
      <div className='desc'>
        <h4>c6g.large</h4>
        <span>4 cores</span>
      </div>
      <span className='count'>1</span>
    </div>

    <button>Octomize</button>
  </>
)
