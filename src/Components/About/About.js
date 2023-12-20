import React from "react";
import './About.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import Pic from '../../Assets/Photo1.jpg'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Pic} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary/>
              <h5>Projects</h5>
              <small>6+</small>
            </article>
          </div>
          <p>Hi, I'm Harshish Parihar, and I graduated from Jodhpur Institute of Engineering and Technology in 2020 with a degree in Electrical Engineering. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
