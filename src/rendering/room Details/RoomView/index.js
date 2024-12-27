import React from 'react'
import './roomView.scss';
import RoomViewFirst from '../../../assets/image/roomViewFirst.webp';
import { MdOutlineAddLocation } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
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
                <div>
                  <p>5/5</p>
                </div>
              </div>
              <div className='share'>
                <IoShareSocial />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}