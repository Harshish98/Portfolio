import React from 'react'
import './Portfolio.css'
import Pic1 from '../../Assets/Pic1.png'
import Pic2 from '../../Assets/Pic2.png'
import Pic3 from '../../Assets/Pic3.png'
import Pic4 from '../../Assets/Pic4.png'
import Pic5 from '../../Assets/Pic5.png'
import Pic6 from '../../Assets/Pic6.png'

function Portfolio() {
const data = [
  {
    id: 1,
    image: Pic1,
    title: "Ecommerce Website",
    github: "https://github.com/Harshish98/ecommerce",
    demo: "https://harshish98.github.io/ecommerce/"
  },
  {
    id: 2,
    image: Pic2,
    title: "Capstone Website",
    github: "https://github.com/Harshish98/Capstone",
    demo: "https://harshish98.github.io/Capstone/"
  },
  {
    id: 3,
    image: Pic3,
    title: "Restaurant Menu",
    github: "https://github.com/Harshish98/Restaurant-Page",
    demo: "https://react101-20d81.web.app/"
  },
  {
    id: 4,
    image: Pic4,
    title: "Random Jokes Generator",
    github: "https://github.com/Harshish98/Random-Jokes",
    demo: "https://harshish98.github.io/Random-Jokes/"
  },
  {
    id: 5,
    image: Pic5,
    title: "Cafe Menu",
    github: "https://github.com/Harshish98/Cafe-Menu",
    demo: "https://harshish98.github.io/Cafe-Menu/"
  },
  {
    id: 6,
    image: Pic6,
    title: "Digital Clock",
    github: "https://github.com/Harshish98/Digital-Clock",
    demo: "https://harshish98.github.io/Digital-Clock/"
  },
]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id}className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img height={200} src={image} alt=""/>
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
            <a href={github} className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio