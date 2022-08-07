import React from 'react'
import { Link, Outlet } from "react-router-dom";

import './Layout.scss'

export const Layout = () => (
  <div className='page'>

    <div className='sidebar'>
      <h1 className='sidebar__heading'>OctoML</h1>

      <nav className='nav'>
        <Link to="/" className='nav__home'>Home</Link>
        <Link to="/analytics" className='nav__analytics'>Analytics</Link>
      </nav>
      
      <div className='sidebar__avatar'></div>
    </div>

    <div className='inner'>
      <Outlet />
    </div>

  </div>
)
