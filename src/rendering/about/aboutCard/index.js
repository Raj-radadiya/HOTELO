import React from 'react';
import './aboutcard.scss';
import home from '../../../assets/icon/solar--home-linear.svg';
import tick from '../../../assets/icon/mdi--tick-circle-outline.svg';
import trophy from '../../../assets/icon/mdi-light--trophy.svg';
import verification from '../../../assets/icon/icons8-instagram-verification-badge-30.png';
import CustomerReview from '../../home/customerReview';
import TeamMember from '../../home/teamMember';
export default function AboutCard() {
    return (
        <div>
            <div className='aboutCards'>
                <div className='mainsection'>
                    <div className='container'>
                        <div className='cardFlex'>
                            <div className='aboutCard'>
                                <div className='aboutCardImg'>
                                    <img src={home} alt='home' />
                                </div>
                                <div className='aboutCardText'>
                                    <h2>540+</h2>
                                    <p>Exclusive Rooms</p>
                                </div>
                            </div>
                            <div className='aboutCard'>
                                <div className='aboutCardImg'>
                                    <img src={tick} alt='home' />
                                </div>
                                <div className='aboutCardText'>
                                    <h2>990 +</h2>
                                    <p>Successful Story</p>
                                </div>
                            </div>
                            <div className='aboutCard'>
                                <div className='aboutCardImg'>
                                    <img src={trophy} alt='home' />
                                </div>
                                <div className='aboutCardText'>
                                    <h2>3,500 +</h2>
                                    <p>Global Presence</p>
                                </div>
                            </div>
                            <div className='aboutCard'>
                                <div className='aboutCardImg'>
                                    <img src={verification} alt='home' />
                                </div>
                                <div className='aboutCardText'>
                                    <h2>54+</h2>
                                    <p>Experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
