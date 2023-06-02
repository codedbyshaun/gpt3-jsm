import React from 'react'
import './footer.css' 
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Step into the future, ahead of the curve.
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="secondary logo" />
          <p>13 Marigold Beach 48A, Fleetwood 91001, Beverly Hills</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>About us</p>
          <p>Social</p>
          <p>Mission</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>13 Marigold Blvd 48A, Fleetwood 91001</p>
          <p>099-1234567</p>
          <p>info@aigroup.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>©2023 NEUMI AI. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer