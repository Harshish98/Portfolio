import React from 'react'
import Resume1 from '../../Assets/Resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={Resume1} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA