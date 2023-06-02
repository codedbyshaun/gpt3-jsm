import React from 'react'
import { Article } from '../../components/'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Digital Evolution: We're blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="May 22, 2023" text="Why You Need a Knowledgebase for Your Online Business (and How to Build One)"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="May 04, 2023" text="How to Use AI to Boost Your Online Business in 2023" />
          <Article imgUrl={blog03} date="April 18, 2022" text="The Ultimate Guide to Creating a Chatbot that Converts" />
          <Article imgUrl={blog04} date="March 26, 2023" text="How to Customize Your Online Experience with NEUMI’s AI Features" />
          <Article imgUrl={blog05} date="May 20, 2023" text="Just In: Analyze Your Online Market with Real-Time Data" />
        </div>
      </div>
    </div>

  )
}

export default Blog