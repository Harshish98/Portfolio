import React from 'react'
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/harshish-parihar-b76504190/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/Harshish98' target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href='https://www.instagram.com/its_harshish/' target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials