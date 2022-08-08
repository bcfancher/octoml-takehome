import { createContext } from 'react'
import { Provider } from './types'

const initialValue: Provider[] = []
export const ProviderContext = createContext(initialValue)