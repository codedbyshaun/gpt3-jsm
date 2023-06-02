import React from 'react'
import possibilityImage from '../../assets/vrperson.png'
import './possibility.css' 

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="person wearing a VR set"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>A Look Into the Future</h4>
        <h1 className="gradient__text">Get a Running Start</h1>
      <p>Join the beta launch of NEUMI, the ultimate AI solution for your online business. 
        Create, optimize and scale your online presence with AI-powered features. 
        Provide a superior user experience that boosts your online growth. Stay ahead of the market with real-time analysis. Sign up now and get a 50% discount on your first month, plus a free consultation with our experts.</p>
      <h4>Request Early Access to Get Started</h4>
      </div>
      </div>
  )
}

export default Possibility