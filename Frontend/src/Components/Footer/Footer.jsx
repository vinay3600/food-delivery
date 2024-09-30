import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non a ducimus explicabo nemo? Nesciunt doloribus corporis dignissimos architecto saepe explicabo, consectetur obcaecati beatae expedita quasi consequatur magnam hic rerum et.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9701931360</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 @ quickdel.com - All Rights Reserved.</p>
    </div>
  )
}
