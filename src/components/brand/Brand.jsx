import React from 'react'
import './brand.css'
import { google, stack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div><img src={google} alt="google logo"></img></div>
      <div><img src={stack} alt="stack logo"></img></div>
      <div><img src={atlassian} alt="atlassian logo"></img></div>
      <div><img src={dropbox} alt="dropbox logo"></img></div>
      <div><img src={shopify} alt="shopify"></img></div>
      
    </div>
  )
}

export default Brand