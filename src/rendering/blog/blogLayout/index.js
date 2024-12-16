import React from 'react'
import blogImg from '../../../assets/image/blogImg.webp';
import { FaLongArrowAltRight } from "react-icons/fa";
export default function BlogLayout() {
    return (
        <div>
            <div className='blogGrid'>
                <div className='blogLayoutLeft'>

                </div>
                <div className='blogLayoutRight'>
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
        </div>
    )
}
