import React from 'react';
import './footer.scss';
import logo from '../../assets/logo/logo-dark.png';
import { MdOutlineAddLocation } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import fb from '../../assets/icon/icons8-facebook-15.png';
import tw from '../../assets/icon/hugeicons--new-twitter.svg';
import insta from '../../assets/icon/icons8-insta-20.png';
import linkdin from '../../assets/icon/icons8-linkedin-20.png';
export default function Footer() {
  return (
    <div>
      <div className='footerMain'>
        <div className='containerLg'>
          <div className='footerMainSection'>
            <div className='flex'>
              <div className='footerLogoSection'>
                <div className='footerLogo'>
                  <img src={logo} alt='logo' />
                </div>
                <div className='footerDisc'>
                  <p>Lorem ipsum dolor sit amet consc tetur adicing elit. Dolor emque dicta molest enim beatae ame consequ atur tempo pretium auctor nam.</p>
                </div>
                <div className='footerEmail'>
                  <input type='email' placeholder='Email Address' />
                  <button className='subscribe'>Subscribe Now</button>
                </div>
              </div>
              <div className='footerService'>
                <div className='footerTitle'>
                  <h3>Our Services</h3>
                </div>
                <div className='footerServiceLink'>
                  <ul>
                    <li>
                      <a href='#'>Rooms & Apartments</a>
                    </li>
                    <li>
                      <a href='#'>Food & Restaurent</a>
                    </li>
                    <li>
                      <a href='#'>Spa & Fitness</a>
                    </li>
                    <li>
                      <a href='#'>Sports & Gaming</a>
                    </li>
                    <li>
                      <a href='#'>Event & Party</a>
                    </li>
                    <li>
                      <a href='#'>Gym & Yoga</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footerTeams'>
                <div className='footerTitle'>
                  <h3>Our Teams</h3>
                </div>
                <div className='footerTeamLink'>
                  <ul>
                    <li>
                      <a href='#'>John Smith</a>
                    </li>
                    <li>
                      <a href='#'>Amily Mark</a>
                    </li>
                    <li>
                      <a href='#'>Lucy Eva</a>
                    </li>
                    <li>
                      <a href='#'>Alister Cock</a>
                    </li>
                    <li>
                      <a href='#'>Jammy Haris</a>
                    </li>
                    <li>
                      <a href='#'>Taylor Sopia</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='footerContact'>
                <div className='footerTitle'>
                  <h3>Contact Info</h3>
                </div>
                <div className='footerContactInfo'>
                  <div className='flex'>
                    <div className='footerLocationImg'>
                      <MdOutlineAddLocation />
                    </div>
                    <div className='footerLocationAddress'>
                      <p className='footerLocationTitle'>Location</p>
                      <p className='footerAddress'>123 Western Road Melbourne, United Kingdom.</p>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='footerLocationImg'>
                      <MdOutlineEmail />
                    </div>
                    <div className='footerLocationAddress'>
                      <p className='footerLocationTitle'>Email</p>
                      <p className='footerAddress'>hello@example.com</p>
                    </div>
                  </div>
                  <div className='flex'>
                    <div className='footerLocationImg'>
                      <FiPhoneCall />
                    </div>
                    <div className='footerLocationAddress'>
                      <p className='footerLocationTitle'>Phone</p>
                      <p className='footerAddress'>+12 345 678 999</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hotelWright'>
        <div className='containerLg'>
          <div className='justifyBetween'>
            <div className='wright'>
              <p>© 2024 Hotelo - Hotel, Resort, Motel HTML and Bootstrap Website Template. All Rights Reserved.</p>
            </div>
            <div className='socialMedia'>
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
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}
