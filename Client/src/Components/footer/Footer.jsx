import React from 'react'
import './footer.css'
import logo_big from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import newlogo from '../assets/newlogo.png'
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="inner-footer">
          <hr/>
        <div className="footer-logo">
            <img src={newlogo} alt='logo.png'/>
            <p>Shoptical</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-link">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt='instagram.icon'/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt='instagram.icon'/>
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt='instagram.icon'/>
            </div>
        </div>
        <div className="footer-copyrigths">
            
            <p>Copyrigths @ 2024 -All Rigths Reserved.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
