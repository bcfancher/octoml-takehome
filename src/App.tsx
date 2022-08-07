import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './Layout'
import { Analytics, Octomize } from './routes'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Octomize />} />
        <Route path='analytics' element={<Analytics />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

const container = document.getElementById("app") as HTMLElement
const root = createRoot(container)
root.render(<App />)