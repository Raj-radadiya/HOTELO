import React from 'react';
import Slider from "react-slick";
import './roomcard.scss';
import Card from '../../../layout/roomCard';
import room1 from '../../../assets/image/room-1.jpg';
import room2 from '../../../assets/image/room-2.jpg';
import room3 from '../../../assets/image/room-3.jpg';
import room4 from '../../../assets/image/room-4.jpg';
import room5 from '../../../assets/image/room-5.jpg';
import room6 from '../../../assets/image/room-6.jpg';
import room7 from '../../../assets/image/room-7.jpg';
import room8 from '../../../assets/image/room-8.jpg';
import room9 from '../../../assets/image/room-9.jpg';
import room10 from '../../../assets/image/room-10.jpg';
import room11 from '../../../assets/image/room-11.jpg';
import room12 from '../../../assets/image/room-12.jpg';
import star from '../../../assets/icon/icons8-star-15.png';
import bed from '../../../assets/icon/material-symbols--bed-outline.svg';
import bath from '../../../assets/icon/solar--bath-linear.svg';
import wifi from '../../../assets/icon/material-symbols--wifi-sharp.svg';
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
export default function RoomCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
              <Card />
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
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room1} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$100 / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Single Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>3bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room2} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$120 / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Double Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>2 Bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room3} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$140 / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Triple Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>2 Bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>1 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room4} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$100 / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Quad  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>3bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room5} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$120  / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Queen  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>2 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room6} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$140  / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>King  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>1 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room7} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$100 / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Twin  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>3 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room8} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$120  / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Studio  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>2 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room9} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$140  / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Standard  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>2 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>1 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room10} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$100 / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Deluxe  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>3 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room11} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$120  / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Superior  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>2 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>2 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='roomCard'>
                  <div className='roomcardImg'>
                    <img src={room12} alt='img' />
                  </div>
                  <div className='roomCardDetails'>
                    <div className='roomPrice'>
                      <p>$140  / Night</p>
                    </div>
                    <div className='roomTitleRating'>
                      <div className='roomTitle'>
                        <h5>Presidential  Room</h5>
                      </div>
                      <div className='roomRating'>
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                        <img src={star} alt='img' />
                      </div>
                    </div>
                    <div className='roomFacility'>
                      <div className='roomFacilityItem'>
                        <img src={bed} alt='bed' />
                        <span>2 bed</span>
                      </div>
                      <div className='roomFacilityItem'>
                        <img src={bath} alt='bed' />
                        <span>1 Bath</span>
                      </div>
                      <div className='roomFacilityItem1'>
                        <img src={wifi} alt='bed' />
                        <span>wifi</span>
                      </div>
                    </div>
                    <div className='roomDescription'>
                      <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                    </div>
                    <div className='roomBtn'>
                      <div className='viewDetails'>
                        <button>view Details</button>
                      </div>
                      <div className='BookNow'>
                        <button>Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
