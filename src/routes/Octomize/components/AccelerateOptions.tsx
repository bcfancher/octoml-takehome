import React, { SyntheticEvent, useContext } from 'react'
import Select from 'react-select'

import { AccelerateConfig, OctomizeTarget } from '../types'
import { ProviderContext } from '../ProvidersContext'

type AccelerateProps = {
  config: AccelerateConfig
  onUpdateConfig: (config: AccelerateConfig) => void
}

export const AccelerateOptions = ({
  config,
  onUpdateConfig,
}: AccelerateProps) => {
  const providers = useContext(ProviderContext)

  const { enabled, engine, target } = config
  const { providerId, instanceTypeId } = target || {}

  const handleAccelerateCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            onChange={handleAccelerateCheckbox}
            checked={enabled}
          />
        </div>
        <label htmlFor='benchmark'>
          <span className='option__name'>Accelerate</span>
          <span className='option__desc'>Could even open this accordian for a paragraph of text</span>
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

        </div>
        <div></div>
      </div>
    </>
  )
}