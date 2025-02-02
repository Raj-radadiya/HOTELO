import React from 'react'
import './Herobanner.scss'
import SLIDER from '../../../layout/slider'
import Input from '../../../layout/input'
import CommonBtn from '../../../layout/button'
export default function Herobanner() {
  return (
    <div>
      <div className='herobanner_main'>
        <SLIDER />
      </div>

      <div className='availablity_main'>
        <div className='container'>
          <div className='availability_box'>
            <div className='check_in'>
              <Input placeholder='check In' />
              {/* <input placeholder='Check In' /> */}
            </div>
            <div className='check_in'>
              <input placeholder='Check Out' />
            </div>
            <div className='adult'>
              <select className='adult_select'>
                <option>Adult</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className='adult'>
              <select className='adult_select'>
                <option>Childs</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className='adult'>
              <select className='adult_select'>
                <option>Rooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
              </select>
            </div>
            <div className='availablity_btn'>
              <CommonBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
