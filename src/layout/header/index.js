import React from 'react'
import './header.scss'
import call from '../../assets/icon/icons8-call-20.png';
import mail from '../../assets/icon/icons8-mail-20.png';
import location from '../../assets/icon/icons8-location-20.png';
import fb from '../../assets/icon/icons8-facebook-15.png';
import earth from '../../assets/icon/icons8-earth-20.png';
import man from '../../assets/icon/icons8-man-20.png';
export default function Header() {
  return (
    <div>
      <div className='header_main'>
        <div className='header_top_main'>
          <div className='container'>
            <div className='header_top'>
              <div className='header_left'>
                <div className='call'>
                  <div>
                    <img src={call} alt='call' />
                  </div>
                  <div>
                    <p>+12 345 678 999</p>
                  </div>
                </div>
                <div className='call'>
                  <div>
                  <img src={mail} alt='mail' />
                  </div>
                  <div>
                    <p>hello@example.com</p>
                  </div>
                </div>
                <div className='call'>
                  <div>
                  <img src={location} alt='location' />
                  </div>
                  <div>
                    <p>123 Western Road Melbourne, UK.</p>
                  </div>
                </div>
              </div>
              <div className='header_right'>
                <div className='social_media'>
                  <div className='fb'>
                    <img src={fb} alt='fb' />
                  </div>
                  <div className='fb'>
                    <img src={fb} alt='fb' />
                  </div>
                  <div className='fb'>
                    <img src={fb} alt='fb' />
                  </div>
                </div>

                <div className='language'>
                  <img src={earth} alt='earth' />
                  <div className='language_text'>
                    <select>
                      <option>Eng</option>
                      <option>Eng</option>
                      <option>Eng</option>
                    </select>
                  </div>
                </div>

                <div className='login'>
                  <img src={man} alt='man' />
                  <span>Login/Register</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
