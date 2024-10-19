import React from 'react'
import './Slider.scss';
import Slider from "react-slick";
import slider1 from '../../assets/image/slider-1.jpg';
import slider2 from '../../assets/image/slider-2.jpg';
import slider3 from '../../assets/image/slider-3.jpg';
export default function SLIDER() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <div className='Slider'>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className='slider_main'>
                            <div className='slider_image'>
                                <img src={slider1} alt='slider1' />
                            </div>
                            <div className='slider_text'>
                                <h5>Welcome To Our Hotel</h5>
                                <h2>Imagine a place where you can be yourself.</h2>
                                <button>About Us</button>
                            </div>
                        </div>
                        <div className='slider_main'>
                            <div className='slider_image'>
                                <img src={slider2} alt='slider2' />
                            </div>
                            <div className='slider_text'>
                                <h5>Welcome To Our Resort</h5>
                                <h2>Choose us once, and you will choose us always.</h2>
                                <button>Booking</button>
                            </div>
                        </div>
                        <div className='slider_main'>
                            <div className='slider_image'>
                                <img src={slider3} alt='slider3' />
                            </div>
                            <div className='slider_text'>
                                <h5>Welcome To Our Motel</h5>
                                <h2>Where friends and family will always feel at home!</h2>
                                <button>Contact Us</button>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}
