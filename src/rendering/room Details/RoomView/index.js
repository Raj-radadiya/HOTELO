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
                  <b>Room ID:</b>
                  <span>RV100</span>
                </div>
                <div className='Details'>
                  <b>Room ID:</b>
                  <span>RV100</span>
                </div>
                <div className='Details'>
                  <b>Room ID:</b>
                  <span>RV100</span>
                </div>
                <div className='Details'>
                  <b>Room ID:</b>
                  <span>RV100</span>
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
                    <input type='email' placeholder='your email address' />
                  </div>
                  <div className='contactInput'>
                    <input type='number' placeholder='your phone number' />
                  </div>
                  <div className='contactInput'>
                    <textarea rows={5}>write message</textarea>
                  </div>
                  <div className='contactCheckbox'>
                    <input type='checkbox' />
                    <label>I here by agree for processing my personal data.</label>
                  </div>
                  <div className='contactBtn'>
                    <button>send message</button>
                  </div>
                </div>
              </div>
              <div className='contactBook'>
                <button>book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}