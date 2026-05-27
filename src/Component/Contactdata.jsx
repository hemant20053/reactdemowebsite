import React from 'react'
import map from '../assets/gmap location.png'

function Contactdata() {
    return (
        <div>
            <div className="contact_data">
                <div className="gmap">
                    <img src= {map} alt="Map" />
                    {/* <script async defer src="https://maps.app.goo.gl/ighUcwBfhSPmVUyA7"></script> */}
                </div>
                <div className="container">
                    <div className="login_form" style={{ maxWidth: '700px', margin: 'auto', padding: '20px' }}>
                        <div className="cnttext">
                            <h3>LOGIN</h3>
                        </div>
                        <form>
                            <div className='email'>
                                <label>Email address:</label> <br />
                                <input type="email" name="email" placeholder='Enter email' required />
                            </div>
                            <div className='password'>
                                <label>Password:</label> <br />
                                <input type="password" name="password" placeholder='Password' required />
                            </div>
                            <div className="login_btn">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contactdata
