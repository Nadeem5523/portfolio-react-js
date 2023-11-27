import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <div>
      <a href='#' className='logo'>Developer <span>X.</span></a>
      <div className='bx bx-menu' id='menu-icon'></div>
          <header>
          <ul className='nav-ul'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li><Link to="/Service">Service</Link></li>
              <li><Link to="/Portfolio">Portfolio</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
          </ul>

          <div className='top-btn'>
            <a href='#' className='h-btn'>Contact me</a>
          </div>
          </header>
      </div>
    )
  }
}

export default Nav