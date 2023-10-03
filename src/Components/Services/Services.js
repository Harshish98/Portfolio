import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Next JS Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimizing the user experience.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Valuable contributions to client's digital solutions.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implement responsive user interfaces using React, Next.js &
                Tailwind CSS.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
