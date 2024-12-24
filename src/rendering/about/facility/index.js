import React from 'react';
import './facility.scss';
import play from '../../../assets/icon/play-svgrepo-com.svg';
import { TiTick } from "react-icons/ti";
export default function AboutFacility() {
    return (
        <div>
            <section>
                <div className='container'>
                    <div className='mainsection'>
                        <div className='aboutFlex'>
                            <div className='aboutLeft'>
                                <span>About Us</span>
                                <h2>Explore the Peaks, Find Your Adventure.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi consectetur adipiscing elit incididunt labore dolore magna.</p>
                                <div className='aboutSpecification'>
                                    <div className='specification'>
                                        <div className='tick'>
                                            <TiTick />
                                        </div>
                                        <div>
                                            <span>Mobile Check-In</span>
                                        </div>
                                    </div>
                                    <div className='specification'>
                                        <div className='tick'>
                                            <TiTick />
                                        </div>
                                        <div>
                                            <span>VIP Shopping at Local Merchants</span>
                                        </div>
                                    </div>
                                    <div className='specification'>
                                        <div className='tick'>
                                            <TiTick />
                                        </div>
                                        <div>
                                            <span>Room Amenities: In-Room Tablets</span>
                                        </div>
                                    </div>
                                    <div className='specification'>
                                        <div className='tick'>
                                            <TiTick />
                                        </div>
                                        <div>
                                            <span>Enthusiast & Hobbyist Tech</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='contactBtn'>
                                    <button>Contact Us</button>
                                </div>
                            </div>
                            <div className='aboutRight'>
                                <div className='aboutImg'>
                                    <img src={play} alt='play' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
