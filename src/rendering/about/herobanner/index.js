import React from 'react';
import './aboutbanner.scss';
import home from '../../../assets/icon/ic--outline-home.svg';
import arrow from '../../../assets/icon/weui--arrow-outlined.svg';
export default function AboutHeroBanner() {
    return (
        <div>
            <div className='pageTitle'>
                <h2>About Us</h2>
                <div className='pageSource'>
                    <div className='homeIcon'>
                        <img src={home} alt='home' />
                    </div>
                    <div className='pageName'>
                        <div>
                            <img src={arrow} alt='arrow' />
                        </div>
                        <div>
                            <p>About Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
