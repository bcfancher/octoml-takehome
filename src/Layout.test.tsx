import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from './Layout'

const TEST_INNER_HEADING = 'TEST INNER'
const TestHarness = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<h2>{TEST_INNER_HEADING}</h2>} />
      </Route>
    </Routes>
  </BrowserRouter>
)

it('renders heading', () => {
  render(<TestHarness />)

  expect(
    screen.getByRole('heading', { name: 'OctoML' })
  ).toBeInTheDocument()
})

it('renders navigation', () => {
  render(<TestHarness />)

  expect(
    screen.getByRole('link', { name: 'Home' })
  ).toBeInTheDocument()
  expect(
    screen.getByRole('link', { name: 'Analytics' })
  ).toBeInTheDocument()
})

it('renders outlet', () => {
  render(<TestHarness />)

  expect(
    screen.getByRole('heading', { name: TEST_INNER_HEADING })
  ).toBeInTheDocument()
})

it.todo('renders user avatar')