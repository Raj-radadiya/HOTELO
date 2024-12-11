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
        prevArrow: <SamplePrevArrow />
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
                                    <div className='reviewCard'>
                                        <div className='contentBg'>
                                            <div className='reviewRating'>
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <span>(5.0)</span>
                                            </div>
                                            <div className='reviewText'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            </div>
                                        </div>
                                        <div className='reviewUser'>
                                            <div className='customerImg'>
                                                <img src={customerFirst} alt='customerFirst' />
                                            </div>
                                            <div className='customerName'>
                                                <h3>Andrew Smith</h3>
                                                <span>Motivational Speaker</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='reviewCard'>
                                        <div className='contentBg'>
                                            <div className='reviewRating'>
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <span>(5.0)</span>
                                            </div>
                                            <div className='reviewText'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            </div>
                                        </div>
                                        <div className='reviewUser'>
                                            <div className='customerImg'>
                                                <img src={customerSecond} alt='customerFirst' />
                                            </div>
                                            <div className='customerName'>
                                                <h3>Jane Ronan</h3>
                                                <span>Insurance Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='reviewCard'>
                                        <div className='contentBg'>
                                            <div className='reviewRating'>
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <span>(5.0)</span>
                                            </div>
                                            <div className='reviewText'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            </div>
                                        </div>
                                        <div className='reviewUser'>
                                            <div className='customerImg'>
                                                <img src={customerThird} alt='customerFirst' />
                                            </div>
                                            <div className='customerName'>
                                                <h3>Andrew Smith</h3>
                                                <span>Motivational Speaker</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='reviewCard'>
                                        <div className='contentBg'>
                                            <div className='reviewRating'>
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <span>(5.0)</span>
                                            </div>
                                            <div className='reviewText'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            </div>
                                        </div>
                                        <div className='reviewUser'>
                                            <div className='customerImg'>
                                                <img src={customerFourth} alt='customerFirst' />
                                            </div>
                                            <div className='customerName'>
                                                <h3>Andrew Smith</h3>
                                                <span>Motivational Speaker</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='reviewCard'>
                                        <div className='contentBg'>
                                            <div className='reviewRating'>
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <span>(5.0)</span>
                                            </div>
                                            <div className='reviewText'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            </div>
                                        </div>
                                        <div className='reviewUser'>
                                            <div className='customerImg'>
                                                <img src={customerFifth} alt='customerFirst' />
                                            </div>
                                            <div className='customerName'>
                                                <h3>Jane Ronan</h3>
                                                <span>Insurance Expert</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='reviewCard'>
                                        <div className='contentBg'>
                                            <div className='reviewRating'>
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <img src={star} alt='star' />
                                                <span>(5.0)</span>
                                            </div>
                                            <div className='reviewText'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                            </div>
                                        </div>
                                        <div className='reviewUser'>
                                            <div className='customerImg'>
                                                <img src={customerSixth} alt='customerFirst' />
                                            </div>
                                            <div className='customerName'>
                                                <h3>Andrew Smith</h3>
                                                <span>Motivational Speaker</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
