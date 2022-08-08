import 'reflect-metadata'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { setupWorker, SetupWorkerApi } from 'msw'

import { restMswHandler } from './lib/cloudProviders'
import { container as iocContainer, InversifyContext } from './ioc'
import { Layout } from './Layout'
import { Analytics, Octomize } from './routes'

const mswWorker: SetupWorkerApi = setupWorker(
  ...restMswHandler(),
)

const queryClient = new QueryClient()

const App = () => (
  <InversifyContext.Provider value={{ container: iocContainer }}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Octomize />} />
            <Route path='analytics' element={<Analytics />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </InversifyContext.Provider>
)

const container = document.getElementById("app") as HTMLElement
const root = createRoot(container)
mswWorker.start().then(() => root.render(<App />))
