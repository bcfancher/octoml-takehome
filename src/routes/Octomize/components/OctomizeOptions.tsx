import React from 'react'

export const OctomizeOptions = () => (
  <>
    <section>
      <input id='benchmark' type='checkbox' />
      <label htmlFor='benchmark'>
        <span>Benchmark</span>
        <span>This is some sub content to explain benchmarking</span>
      </label>
    </section>

    <section>
      <input id='accelerate' type='checkbox' />
      <label htmlFor='accelerate'>
        <span>Accelerate</span>
        <span>Could even open this accordian for a paragraph of text</span>
      </label>
    </section>
  </>
)
