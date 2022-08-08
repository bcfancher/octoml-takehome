import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { useInjection } from '../../ioc'
import { GetAllProvidersAndInstanceTypes } from '../../lib/cloudProviders'
import { fromProvidersEntityArray } from './mappers/fromProvidersEntityArray'
import { Octomize } from './Octomize'
import { ProviderContext } from './ProvidersContext'

export const OctomizeConnected = () => {

  const getAllProvidersAndInstanceTypes = useInjection(
    GetAllProvidersAndInstanceTypes
  )

  const {
    data,
    // isLoading,
    // error,
  } = useQuery(
    ['providersAndInstanceTypes'],
    () => fromProvidersEntityArray(
      getAllProvidersAndInstanceTypes.execute()
    ),
    { cacheTime: 0, retry: 2 },
  )

  if (!data) {
    return null
  }

  return (
    <ProviderContext.Provider value={data}>
      <Octomize />
    </ProviderContext.Provider>
  )
}