import React from 'react'
import './roomView.scss';
import RoomViewFirst from '../../../assets/image/roomViewFirst.webp';
import { MdOutlineAddLocation } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaCompressAlt } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
import manager from '../../../assets/image/member-1.webp';
import Input from '../../../layout/input';
import CommonBtn from '../../../layout/button';
export default function RoomView() {
  return (
    <div>
      <div className='containerLg'>
        <div className='roomFlex'>
          <div className='RoomViewLeft'>
            <div className='roomImg'>
              <img src={RoomViewFirst} alt='room' />
            </div>
            <div className='label'>
              <div className='photos'>
                PHOTOS
              </div>
              <div className='map'>
                MAP
              </div>
            </div>
            <div className='roomDetails'>
              <div className='roomDetailsTitle'>
                <h5>Room Details</h5>
              </div>
              <div className='roomDetailsMain'>
                <div className='roomDetailsTop'>
                  <div className='roomDetailsInq'>
                    <div className='Details'>
                      <b>Room ID:</b>
                      <span>RV100</span>
                    </div>
                    <div className='Details'>
                      <b>Price:</b>
                      <span> $100.00</span>
                    </div>
                    <div className='Details'>
                      <b>Room Size:</b>
                      <span>200 Sqft</span>
                    </div>
                    <div className='Details'>
                      <b>Bedrooms:</b>
                      <span>3</span>
                    </div>
                    <div className='Details'>
                      <b>Bathrooms:</b>
                      <span>2</span>
                    </div>
                  </div>
                  <div className='roomDetailsInq'>
                    <div className='Details'>
                      <b>Garage:</b>
                      <span>2</span>
                    </div>
                    <div className='Details'>
                      <b>Garage Size:</b>
                      <span> 500 SqFt</span>
                    </div>
                    <div className='Details'>
                      <b>Year Built:</b>
                      <span>2010-01-01</span>
                    </div>
                    <div className='Details'>
                      <b>Room Type:</b>
                      <span>Standard</span>
                    </div>
                    <div className='Details'>
                      <b>Room Status:</b>
                      <span>For Rent</span>
                    </div>
                  </div>
                </div>
                <h6>Additional Details</h6>
                <div className='roomDetailsTop'>
                  <div className='roomDetailsInq'>
                    <div className='Details'>
                      <b>Deposit:</b>
                      <span>30%</span>
                    </div>
                    <div className='Details'>
                      <b>Pool Size:</b>
                      <span> 457 Sqft</span>
                    </div>
                    <div className='Details'>
                      <b>Last Remodel Year:</b>
                      <span>2020</span>
                    </div>
                  </div>
                  <div className='roomDetailsInq'>
                    <div className='Details'>
                      <b>Amenities:</b>
                      <span>Clubhouse</span>
                    </div>
                    <div className='Details'>
                      <b>Additional Rooms:</b>
                      <span>Guest Bat</span>
                    </div>
                    <div className='Details'>
                      <b>Equipment</b>
                      <span>Grill - Gas - Light</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='roomDetails'>
              <div className='roomDetailsTitle'>
                <h5>Description</h5>
              </div>
              <div className='roomDetailsMain'>
                <p>Phasellus dictum ipsum nec rutrum tristique. Aliquam a mauris lacinia, condimentum tellus a, mattis nisl. Sed hendrerit viverra elit tempus venenatis. Morbi vel faucibus odio. Nunc vulputate convallis scelerisque. Mauris sollicitudin elit eget ante pharetra, nec suscipit nisl sagittis. Suspendisse euismod a augue pretium dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Sed do eiusmod tempor incididunt dolore magna aliqua.</p>
              </div>
            </div>
            <div className='roomDetails'>
              <div className='roomDetailsTitle'>
                <h5>Features</h5>
              </div>
              <div className='roomDetailsMain'>
                <div className='roomDetailsTop'>
                  <div className='roomDetailsInq'>
                    <li>TV Cable</li>
                    <li>Air Conditioning</li>
                    <li>Barbeque</li>
                    <li>Gym</li>
                    <li>Swimming Pool</li>
                    <li>Laundry</li>
                    <li>Microwave</li>
                  </div>
                  <div className='roomDetailsInq'>
                    <li>Lawn</li>
                    <li>Refrigerator</li>
                    <li>Sauna</li>
                    <li>Washer</li>
                    <li>Dryer</li>
                    <li>WiFi</li>
                    <li>Outdoor Shower</li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='RoomViewRight'>
            <div className='roomTitle'>
              <h3>Single Room</h3>
            </div>
            <div className='roomPrice'>
              <span>$100.00</span>
            </div>
            <div className='roomLocation'>
              <MdOutlineAddLocation />
              <p>123 Western Road Melbourne, United Kingdom.</p>
            </div>
            <div className='roomRating'>
              <div className='roomRatings'>
                <div className='star'>
                  <FaRegStar />
                </div>
                <div className='ratingText'>
                  <p>5/5</p>
                </div>
              </div>
              <div className='share'>
                <IoShareSocial />
              </div>
              <div className='share'>
                <FaRegHeart />
              </div>
              <div className='share'>
                <FaCompressAlt />
              </div>
              <div className='share'>
                <IoIosPrint />
              </div>
            </div>
            <div className='contactForm'>
              <div className='contactTitle'>
                <h3>Contact With Agent</h3>
              </div>
              <div className='contactFormCard'>
                <div className='hotelManager'>
                  <div className='hotelManagerImg'>
                    <img src={manager} alt='manager' />
                  </div>
                  <div className='hotelManagerPost'>
                    <p>John Smith</p>
                    <p>Hotel Manager</p>
                  </div>
                </div>
                <div className='numberDetails'>
                  <div className='number'>
                    <p>+12 345 678 999</p>
                  </div>
                  <div className='details'>
                    <a href='#'>View All Rooms</a>
                  </div>
                </div>
                <div className='contactFormInput'>
                  <div className='contactInput'>
                    <Input type={'number'} placeholder={'your phone number'}/>
                  </div>
                  <div className='contactInput'>
                  <Input type={'number'} placeholder={'your phone number'}/>
                  </div>
                  <div className='contactInput'>
                    <textarea rows={5}>write message</textarea>
                  </div>
                  <div className='contactCheckbox'>
                    <input type='checkbox' />
                    <label>I here by agree for processing my personal data.</label>
                  </div>
                  <div className='contactBtn'>
                    <CommonBtn buttonText={'send message'}/>
                  </div>
                </div>
              </div>
              <div className='contactBook'>
                <CommonBtn buttonText={'book now'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}