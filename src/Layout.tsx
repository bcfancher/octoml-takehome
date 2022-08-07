import React from 'react'
import { Link, Outlet } from "react-router-dom";

export const Layout = () => (
  <div className='page'>

    <div className='page__sidebar'>
      <h1 className='sidebar__header'>OctoML</h1>
      <nav className='sidebar__nav'>
        <Link to="/" className='nav__home'>Home</Link>
        <Link to="/analytics" className='nav__analytics'>Analytics</Link>
      </nav>
      <div className='sidebar__avatar'></div>
    </div>

    <div className='page__inner'>
      <Outlet />
    </div>

  </div>
)
