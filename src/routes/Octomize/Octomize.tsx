import React from 'react'

export const Octomize = () => (
  <>
    <h2>Shufflenet-v2.onnx</h2>
    <p>Created 3 days ago by Mike Johnson</p>

    <div>

      <div>
        <h3>Octomize</h3>

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
      </div>

      <div>
        <h3>Total Runs</h3>
        <span>3</span>

        <div>
          <div>
            <h4>c4.large</h4>
            <span>2 cores</span>
          </div>
          <span>1</span>
        </div>

        <div>
          <div>
            <h4>c4.xlarge</h4>
            <span>4 cores</span>
          </div>
          <span>1</span>
        </div>
        </div>

        <div>
          <div>
            <h4>c6g.large</h4>
            <span>4 cores</span>
          </div>
          <span>1</span>
        </div>
    </div>
  </>
)