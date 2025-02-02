import React from 'react';
import './teamMember.scss';
// import person1 from '../../../assets/image/member-1.webp';
// import share from '../../../assets/icon/material-symbols-light--share.svg';
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
import Team from '../../../layout/team';
import { Partner } from '../../../utils';
export default function TeamMember() {
    return (
        <div>
            <div className='mainsection2'>
                <section>
                    <div className='container'>
                        <div className='sectionTitle'>
                            <h2>Our Team</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='gridFour'>
                            {Partner.map((el) => {
                                return <Team el={el} />
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
