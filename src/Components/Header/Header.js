import React from 'react'
import CTA from './CTA'
import Pic from '../../Assets/Photo.jfif'
import './Header.css'
import HeaderSocials from './HeaderSocials'
function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Harshish Parihar</h1>
        <h5 className='text-light'>Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={Pic} alt="me"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header