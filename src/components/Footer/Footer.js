import React from 'react'
import './Footer.css'
import footer_logo from '../../abc/why.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={footer_logo} alt='' />
            <p>I am a frontend developer from, Ethiopia with 2 Years of experiance in companies.</p>
        </div>
        <div className='footer-top-right'>
        <div className='footer-email-input'>
        <img src={user_icon} alt='' /> 
        <input type='email' placeholder='Enter Your email' required />
        </div>
        <div className='footer-subscribe'>
           Subscribe 
        </div>
        </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className='footer-bottom-left'>@ 2024 Yohannes Gossaye. All rights reserved.</p>
            <div className='footer-bottom-right'>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Conncet with me </p>
            </div>
        </div>
    </div>
  )
}

export default Footer