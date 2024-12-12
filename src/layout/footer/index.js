import React from 'react';
import './footer.scss';
import logo from '../../assets/logo/logo-dark.png';
export default function Footer() {
  return (
    <div>
      <div className='footerMain'>
        <div className='container'>
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
                    <a href='#'>Rooms & Apartments</a>
                  </li>
                  <li>
                    <a href='#'>Rooms & Apartments</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
