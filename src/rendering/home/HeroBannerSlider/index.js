import React from 'react'
import './Herobanner.scss'
import SLIDER from '../../../layout/slider'
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
              <input type='text' placeholder='Check In' />
            </div>
            <div className='check_in'>
              <input type='text' placeholder='Check Out' />
            </div>
            <div className='adult'>
              <select>
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
              <select>
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
              <select>
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
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
