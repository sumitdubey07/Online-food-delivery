import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Welcome to our Online Food Delivery Platform, where great food meets convenience. Explore a wide variety of cuisines, discover your favorite dishes, and enjoy a seamless ordering experience. Whether you're craving a quick snack, a hearty meal, or a sweet treat, we bring fresh and delicious food straight to your doorstep with fast, reliable delivery. Our mission is to make every meal enjoyable, affordable, and just a few clicks away.</p>
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
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 7021931245</li>
                    <li>sumitdubey2506@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; Sumit - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer