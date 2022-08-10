import React, { SyntheticEvent, useContext } from 'react'
import Select from 'react-select'

import { BenchmarkConfig, OctomizeTarget } from '../types'
import { ProviderContext } from '../ProvidersContext'

type BenchmarkProps = {
  config: BenchmarkConfig
  onUpdateConfig: (config: BenchmarkConfig) => void
}

export const BenchmarkOptions = ({
  config,
  onUpdateConfig,
}: BenchmarkProps) => {
  const providers = useContext(ProviderContext)

  const { enabled, engine, target, numTrials, runsPerTrial } = config
  const { providerId, instanceTypeId } = target || {}

  const handleBenchmarkCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateConfig({
      ...config,
      enabled: e.currentTarget.checked
    })
  }

  const handleChangeEngine = ({ value }: any) => {
    onUpdateConfig({
      ...config,
      engine: value
    })
  }

  const handleChangeTrials = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = parseInt(e.currentTarget.value, 10)
    onUpdateConfig({
      ...config,
      numTrials: updatedValue > -1 ? updatedValue : 0
    })
  }

  const handleChangeRuns = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = parseInt(e.currentTarget.value, 10)
    onUpdateConfig({
      ...config,
      runsPerTrial: updatedValue > -1 ? updatedValue : 0
    })
  }

  const handleChangeProviderSelect = ({ value }: any) => {
    const updatedProviderId = value
      ? parseInt(value, 10)
      : undefined
    onUpdateConfig({
      ...config,
      target: {
        providerId: updatedProviderId,
        instanceTypeId: undefined,
      }
    })
  }

  const handleChangeInstanceTypeSelect = ({ value }: any) => {

    const updatedInstanceTypeId = value
      ? parseInt(value, 10)
      : undefined

    onUpdateConfig({
      ...config,
      target: {
        providerId: providerId,
        instanceTypeId: updatedInstanceTypeId,
      }
    })
  }

  let provider
  let instanceTypes
  let instanceType
  if (providerId) {
    provider = providers.find(({ id }) => id === providerId)
    instanceTypes = provider?.instanceTypes

    if (instanceTypeId) {
      instanceType = instanceTypes?.find(({id}) => id === instanceTypeId)
    }
  }

  return (
    <>
      <div className='option'>
        <div className='option__checkbox'>
          <input
            id='benchmark'
            type='checkbox'
            onChange={handleBenchmarkCheckbox}
            checked={enabled}
          />
        </div>
        <label htmlFor='benchmark'>
          <span className='option__name'>Benchmark</span>
          <span className='option__desc'>This is some sub content to explain benchmarking</span>
        </label>
        <div className='option__arrow'><div></div></div>

        <div></div>
        <div className='option__config'>
          <div>Engine:</div>
          <div>
            <Select
              value={engine
                ? { value: engine, label: engine }
                : null}
              onChange={handleChangeEngine}
              options={[
                { value: 'ONNX', label: 'ONNX' },
                { value: 'TVM', label: 'TVM' },
              ]}
            />
          </div>

          <div>Hardware Provider:</div>
          <div>
            <Select
              value={provider
                ? { value: `${provider.id}`, label: provider.name }
                : null}
              onChange={handleChangeProviderSelect}
              options={[
                ...providers.map(({ id, name }) => ({
                  value: `${id}`,
                  label: name,
                }))
              ]}
            />
          </div>

          <div>Hardware Instance:</div>
          <div>
            <Select
              value={instanceType
                ? { value: `${instanceType.id}`, label: instanceType.name }
                : null}
              onChange={handleChangeInstanceTypeSelect}
              options={[
                ...(instanceTypes ? instanceTypes.map(({ id, name }) => ({
                  value: `${id}`,
                  label: name,
                })) : [])
              ]}
            />
          </div>

          <div>Number of Trials:</div>
          <div>
            <input
              type='number'
              placeholder='0'
              onChange={handleChangeTrials}
              value={numTrials || ''}
            />
          </div>

          <div>Runs / Trial:</div>
          <div>
            <input
              type='number'
              placeholder='0'
              onChange={handleChangeRuns}
              value={runsPerTrial || ''}
            />
          </div>
        </div>
        <div></div>
      </div>
    </>
  )
}