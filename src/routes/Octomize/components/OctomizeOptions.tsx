import React from 'react'

export const OctomizeOptions = () => (
  <>
    <div className='option'>
      <div className='option__checkbox'>
        <input id='benchmark' type='checkbox' />
      </div>
      <label htmlFor='benchmark'>
        <span className='option__name'>Benchmark</span>
        <span className='option__desc'>This is some sub content to explain benchmarking</span>
      </label>
      <div className='option__arrow'><div></div></div>
    </div>

    <div className='option'>
      <div className='option__checkbox'>
        <input id='accelerate' type='checkbox' />
      </div>
      <label htmlFor='accelerate'>
        <span className='option__name'>Accelerate</span>
        <span className='option__desc'>Could even open this accordian for a paragraph of text</span>
      </label>
      <div className='option__arrow'><div></div></div>
    </div>
  </>
)
