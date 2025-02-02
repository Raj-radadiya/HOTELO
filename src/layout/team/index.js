import React from 'react'
import './team.scss'
// import person1 from '../../assets/image/member-1.webp'
import share from '../../assets/icon/material-symbols-light--share.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export default function Team({ el }) {
    return (
        <div>
            <div className='memberDetails'>
                <div className='memberImg'>
                    <img src={el.partnerImg} alt='person1' />
                    <div className='social_media'>
                        <div className='fb'>
                            <FaFacebookF />
                        </div>
                        <div className='tw'>
                            <FaXTwitter />
                        </div>
                        <div className='fb'>
                            <FaInstagram />
                        </div>
                        <div className='tw'>
                            <FaLinkedinIn />
                        </div>
                    </div>
                </div>
                <div className='memberDetailsInfo'>
                    <div className='memberShare'>
                        <img src={share} alt='share' />
                    </div>
                    <div className='memberName'>
                        <h3>John Smith</h3>
                    </div>
                    <div className='memberDesignation'>
                        <span>Hotel Manager</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
