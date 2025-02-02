import React from 'react'
import './blogCard.scss'
import blogImg from '../../assets/image/blogImg.webp';
import { FaLongArrowAltRight } from "react-icons/fa";
export default function BlogCards({ el }) {
    return (
        <div>
            <div className='blogCard'>
                <div className='blogImg'>
                    <img src={el.blogImg} alt='blogImg' />
                    <div className='blogLocation'>
                        <span>{el.location}</span>
                    </div>
                </div>
                <div className='blogInfo'>
                    <div className='blogTitle'>
                        <a href='#'>{el.blogTitle}</a>
                    </div>
                    <div className='blogLink'>
                        <a href='#'>{el.blogLink}</a>
                        <FaLongArrowAltRight />
                    </div>
                </div>
            </div>
        </div>
    )
}
