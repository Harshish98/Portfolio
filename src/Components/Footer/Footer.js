import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer__logo'>HARSHISH</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://www.instagram.com/its_harshish/' target="_blank" rel="noreferrer"><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/harshish-parihar-b76504190/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Harshish98' target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; HARSHISH Portfolio, All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer