import { useContext } from 'react'
import { interfaces } from 'inversify'
import { InversifyContext } from './InversifyContext'

export function useInjection<T>(
  identifier: interfaces.ServiceIdentifier<T>,
  named?: string | number | symbol | undefined,
) {
  const { container } = useContext(InversifyContext)

  if (!container) {
    throw new Error('Missing Inversify Container')
  }

  if (named) {
    return container.getNamed<T>(identifier, named)
  }

  return container.get<T>(identifier)
}
