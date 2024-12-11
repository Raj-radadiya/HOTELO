import React from 'react';
import './teamMember.scss';
import person1 from '../../../assets/image/member-1.webp';
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
                            <div className='memberDetails'>
                                <div className='memberImg'>
                                    <img src={person1} alt='person1' />
                                </div>
                                <div className='memberDetailsInfo'>
                                    <div className='memberName'>
                                        <h3>John Smith</h3>
                                    </div>
                                    <div className='memberDesignation'>
                                        <span>Hotel Manager</span>
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
