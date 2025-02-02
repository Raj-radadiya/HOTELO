import React from 'react';
import './blog.scss';
import BlogCards from '../../../layout/blog';
import { blog } from '../../../utils';

export default function BlogCard() {
  return (
    <div>
      <div className='mainsection2'>
        <section>
          <div className='container'>
            <div className='sectionTitle'>
              <h2>Our Latest Blog</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='gridThree'>
              {blog.map((el)=>{
                return <BlogCards el={el}/>
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
