import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Improving user experience instantly',
    text: 'Improve your user experience in minutes. NEUMI is the AI solution for your online business. Manage your chatbot, knowledgebase, analytics, integration and customization with ease. Provide a superior user experience that boosts your online growth. NEUMI is the smartest way to succeed online.'
  },
  {
    title: 'Become the Next Big Thing',
    text: 'With NEUMI, you can become the next big thing online. NEUMI empowers you with AI technology to create, optimize and scale your online business. NEUMI enables you with features that cover all aspects of online business. NEUMI engages you with users that love your online experience. NEUMI is the AI solution you have been waiting for.'
  },
  {
    title: 'Get Ahead of the Curve',
    text: 'NEUMI’s innovation helps you get ahead of the competition. NEUMI uses cutting-edge AI technology to help you create a unique and powerful online business. NEUMI helps you stand out from the crowd with features that no other solution can offer. NEUMI is gives you the competitive edge online.'
  },
  {
    title: 'Real Time Market Analysis',
    text: 'NEUMI’s newest feature helps you monitor and understand the trends, opportunities and threats in your online market. Analyze your competitors, customers and industry with AI-powered insights. NEUMI helps you adapt and optimize your online business strategy based on real-time data, keeping you ahead of the market.'
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now. Wake up and smell the artificial coffee! Let's make it happen.</h1>
        <p>Request Early Acces and Get Started Today</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features