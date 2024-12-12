import React from 'react';
import './blog.scss';
import blogImg from '../../../assets/image/blogImg.webp';
import { FaLongArrowAltRight } from "react-icons/fa";
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
              <div className='blogCard'>
                <div className='blogImg'>
                  <img src={blogImg} alt='blogImg' />
                  <div className='blogLocation'>
                    <span>Europe</span>
                  </div>
                </div>
                <div className='blogInfo'>
                  <div className='blogTitle'>
                    <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                  </div>
                  <div className='blogLink'>
                    <a href='#'>Read More</a>
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
              <div className='blogCard'>
                <div className='blogImg'>
                  <img src={blogImg} alt='blogImg' />
                  <div className='blogLocation'>
                    <span>Europe</span>
                  </div>
                </div>
                <div className='blogInfo'>
                  <div className='blogTitle'>
                    <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                  </div>
                  <div className='blogLink'>
                    <a href='#'>Read More</a>
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
              <div className='blogCard'>
                <div className='blogImg'>
                  <img src={blogImg} alt='blogImg' />
                  <div className='blogLocation'>
                    <span>Europe</span>
                  </div>
                </div>
                <div className='blogInfo'>
                  <div className='blogTitle'>
                    <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                  </div>
                  <div className='blogLink'>
                    <a href='#'>Read More</a>
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
