import React from 'react'
import image from '../assets/nature logo.png'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footerdata() {
  return (
    <div className='footerdata'>
      <div className="container">
        <div className="footer_item">
          <div className="row align-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="footer_logo">
                <a href="/"><img src={image} alt="" /></a>
                <h5>Our Team </h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="footer_menus">
                <h2>Manus</h2>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/aboutus">About Us</a></li>
                  <li><a href="/gallery">Gallery</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="contact">
                <ul>
                  <li><span><FaHome /></span> Jatawas, Nagour</li>
                  <li><span><FaPhone /></span> Phone: +91-9234892370</li>
                  <li><span><FaMailBulk /></span> Email: hello@gmail.com</li>
                </ul>
                <div className="followsite">
                  <p>Follow Us</p>
                  <a href="/"><span><FaFacebook /></span></a>
                  <a href="/"><span><FaYoutube /></span></a>
                  <a href="/"><span><FaInstagram /></span></a>
                  <a href="/"><span><FaTwitter /></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="othercontant">
          <p><strong>© 2026. All Rights Reserved.</strong> Built by BootstrapBrain with 💙</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footerdata
