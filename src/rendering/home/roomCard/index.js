import React, { Component } from "react";
import Slider from "react-slick";
import './roomcard.scss';
import Card from '../../../layout/roomCard';
import next from '../../../assets/icon/icons8-more-than-14.png';
import previous from '../../../assets/icon/icons8-back-14.png';
import { RoomPhoto } from "../../../utils";
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
export default function RoomCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          pauseOnHover: true,
        }
      }
    ]
  };
  return (
    <div>
      <div className='mainsection'>
        <section>
          <div className='container'>
            <div className='sectionTitle'>
              <h2>Explore Our Rooms (Grid Style)</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='roomcards'>
              {RoomPhoto.map((el) => {
                return <Card el={el} />
              })}
            </div>
          </div>
        </section>
      </div>
      <div className='mainsection2'>
        <section>
          <div className='container'>
            <div className='sectionTitle'>
              <h2>Explore Our Rooms (Slider Style)</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className="slider-container">
              <Slider {...settings}>
                {RoomPhoto.map((el) => {
                  return <Card el={el} />
                })}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
