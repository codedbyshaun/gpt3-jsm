import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css' 

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is NEUMI?" text=" Neural-Mind (NEUMI) is an advanced AI model that can be integrated into a wide range
          of applications, from autonomous vehicles and virtual assistants, to
          financial analysis and healthcare systems,  revolutionizing the way
          we interact with technology." />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Possibilities beyond the imagination</h1>
      <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">        
        <Feature title="Chatbots" text="Connect with your customers like never before. 
        NEUMI Chat lets you create a personalized, engaging and smart chatbot that can 
        handle any conversation. Whether you want to provide support, sell products, collect 
        feedback or just have fun, our chatbot feature will help you achieve your goals." />
        <Feature title="Knowledgebase" text="Build a powerful knowledgebase for your business. 
        NEUMI Know-how lets you create, organize and share information with your customers and employees. 
        Whether you need to document your products, services, processes or policies, our knowledgebase 
        feature will help you deliver the right answers at the right time." />
        <Feature title="Customisation" text="Customise your chatbot and knowledgebase to suit your 
        brand identity and voice. Choose from a variety of templates, themes and widgets. Add your own logo, images 
        and videos. Make your content unique and memorable." />
      </div>
    </div>
  )
}

export default WhatGPT3