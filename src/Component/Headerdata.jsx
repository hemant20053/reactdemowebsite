import React from 'react'
import image from '../assets/nature logo.png'
import { Link } from 'react-router-dom'

function Headerdata() {
  return (
    <div className='webheader'>
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <div className="applogo">
            <a className="navbar-brand" href="/"><img src={image} alt="" /></a>
          </div>
          <div className="manus">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div >
  )
}

export default Headerdata
