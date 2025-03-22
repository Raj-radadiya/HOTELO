import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
import down from '../../assets/icon/down.svg';
import us from '../../assets/icon/usFlag.jpg';
import Germany from '../../assets/icon/germany.jpg';
import France from '../../assets/icon/francia.jpg';
import spanish from '../../assets/icon/spain.jpg';
import russia from '../../assets/icon/russia.jpg';
import Italy from '../../assets/icon/italy.jpg';
import line from '../../assets/icon/ic--round-menu.svg';
export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className='header_main'>
        <div className='header_top_main'>
          <div className='container'>
            <div className='header_top'>
              <div className='header_left'>
                <div className='call'>
                  <div className='callIcon'>
                    <img src={call} alt='call' />
                  </div>
                  <div className='callNo'>
                    <a href='#'>+12 345 678 999</a>
                  </div>
                </div>
                <div className='call'>
                  <div className='callIcon'>
                    <img src={mail} alt='mail' />
                  </div>
                  <div className='callNo'>
                    <a href='#'>hello@example.com</a>
                  </div>
                </div>
                <div className='call'>
                  <div className='callIcon'>
                    <img src={location} alt='location' />
                  </div>
                  <div className='callNo'>
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
                      <div className='flex'>
                        <img src={us} alt='us' />
                        <a href='#'>Eng</a>
                      </div>
                      <div className='flex'>
                        <img src={Germany} alt='us' />
                        <a href='#'>ger</a>
                      </div>
                      <div className='flex'>
                        <img src={France} alt='us' />
                        <a href='#'>Fra</a>
                      </div>
                      <div className='flex'>
                        <img src={spanish} alt='us' />
                        <a href='#'>Spa</a>
                      </div>
                      <div className='flex'>
                        <img src={russia} alt='us' />
                        <a href='#'>Rus</a>
                      </div>
                      <div className='flex'>
                        <img src={Italy} alt='us' />
                        <a href='#'>Ita</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='login'>
                  <img src={man} alt='man' />
                  <span onClick={() => navigate('/account')}>Login/Register</span>
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
                  <a href='/'>Home </a>
                  <a href='/about'>About Us </a>
                  <a href='/ourRooms'>Our Rooms  </a>
                  <a href='/blog'>Blog </a>
                  <a href='/ourTeams'>our Teams</a>
                </div>
                <div className='header_btn'>
                  <div className='search_btn'>
                    <p>search</p>
                    <img src={search} alt='search' />
                  </div>
                  <div className='book_btn'>
                    <button>Book Now</button>
                  </div>
                  <div className='line'>
                    <img src={line} alt='line' />
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
