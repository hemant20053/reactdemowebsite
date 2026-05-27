import React from 'react'
import image from '../assets/Certificate.png'

function Bannerdata() {
  return (
    <div className="bannerdata">
      <div className='container'>
        <div className="banner">
          <div className="bannercontant">
            <p>Banners and notices are displayed in some pages, in particular API reference, in order to highlight important factors that will affect how the described content is used. For example, banners are used to highlight when a particular interface, method or property is deprecated.</p>
            <div className="btnlm">
              <button>Learn More</button>
            </div>
          </div>
          <div className="bannerimg">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bannerdata
