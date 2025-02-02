import React from 'react';
import './customerReview.scss';
import Slider from "react-slick";
import star from '../../../assets/icon/icons8-star-25.png';
import customerFirst from '../../../assets/image/customerFirst.webp';
import customerSecond from '../../../assets/image/customerSecond.webp';
import customerThird from '../../../assets/image/customerThird.webp';
import customerFourth from '../../../assets/image/customerForth.webp';
import customerFifth from '../../../assets/image/customerFifth.webp';
import customerSixth from '../../../assets/image/customerSixth.webp';
import next from '../../../assets/icon/icons8-more-than-14.png';
import previous from '../../../assets/icon/icons8-back-14.png';
import ClintFeedback from '../../../layout/clintFeedback';
import ClintReview from '../../../layout/clintFeedback';
import { Feedback } from '../../../utils';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='nextArrow'
            onClick={onClick}
        >
            <img src={next} alt='next' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className='previousArrow'
            onClick={onClick}
        >
            <img src={previous} alt='previous' />
        </div>
    );
}
export default function CustomerReview() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                    autoplaySpeed: 1500,
                    pauseOnHover: true
                }
            },
        ],
    };
    return (
        <div>
            <div className='mainsection2'>
                <section>
                    <div className='container'>
                        <div className='sectionTitle'>
                            <h2>Our Clients Feedback</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='reviewMain'>
                            <div className="slider-container">
                                <Slider {...settings}>
                                    {Feedback.map((el) => {
                                        return <ClintReview el={el} />
                                    })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
