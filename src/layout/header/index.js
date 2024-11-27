import React from 'react'
import './header.scss'
import call from '../../assets/icon/icons8-call-20.png';
import mail from '../../assets/icon/icons8-mail-20.png';
import location from '../../assets/icon/icons8-location-20.png';
import fb from '../../assets/icon/icons8-facebook-15.png';
import tw from '../../assets/icon/hugeicons--new-twitter.svg';
import insta from '../../assets/icon/icons8-insta-20.png';
import linkdin from '../../assets/icon/icons8-linkedin-20.png';
import earth from '../../assets/icon/icons8-earth-20.png';
import man from '../../assets/icon/icons8-man-20.png';
import logo from '../../assets/logo/logo-dark.png';
import search from '../../assets/icon/icons8-search-20.png';
import down from '../../assets/icon/down.png'
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
                    <a href='#'>+12 345 678 999</a>
                  </div>
                </div>
                <div className='call'>
                  <div>
                    <img src={mail} alt='mail' />
                  </div>
                  <div>
                    <a href='#'>hello@example.com</a>
                  </div>
                </div>
                <div className='call'>
                  <div>
                    <img src={location} alt='location' />
                  </div>
                  <div>
                    <a href='#'>123 Western Road Melbourne, UK.</a>
                  </div>
                </div>
              </div>
              <div className='header_right'>
                <div className='social_media'>
                  <div className='fb'>
                    <img src={fb} alt='fb' />
                  </div>
                  <div className='fb'>
                    <img src={tw} alt='tw' />
                  </div>
                  <div className='fb'>
                    <img src={insta} alt='insta' />
                  </div>
                  <div className='fb'>
                    <img src={linkdin} alt='linkdin' />
                  </div>
                </div>

                <div className='language'>
                  <img src={earth} alt='earth' />
                  <div className='language_text'>
                    <div className='languageBtn'>
                      <button>english</button>
                      <img src={down} alt='img' />
                    </div>
                    <div className='hiden'>
                      <p>eng</p>
                      <p>ger</p>
                      <p>fra</p>
                      <p>spa</p>
                      <p>rus</p>
                      <p>ita</p>
                    </div>
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
        <div className='header_bottom'>
          <div className='container'>
            <div className='header_bottom_main'>
              <div className='header_logo'>
                <img src={logo} alt='logo' />
              </div>
              <div className='header_bottom_right'>
                <div className='nav_link'>
                  <a href='#'>Home </a>
                  <a href='#'>About Us </a>
                  <a href='#'>Our Rooms  </a>
                  <a href='#'>Pages </a>
                  <a href='#'>Blog </a>
                  <a href='#'>Contact </a>
                </div>
                <div className='header_btn'>
                  <div className='search_btn'>
                    <p>search</p>
                    <img src={search} alt='search' />
                  </div>
                  <div className='book_btn'>
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
