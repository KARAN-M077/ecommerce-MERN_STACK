import React from 'react'
import './loginsign.css'
const Loginsingup = () => {
  return (
    <div>
      <div className="loginsignup">
        <div className="loginsignup-container">
          <h1>Sign-Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email'/>
            <input type="password" placeholder='passowrd'/>
          </div>
          <div className="loginsign-button">
          <button>Continue</button>
          </div>
          <p className='loginsignup-login'>Already have Account <span>Login Here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By clicking the , i agree the trems of use and privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loginsingup
