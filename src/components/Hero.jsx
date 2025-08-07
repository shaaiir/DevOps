import React from 'react';
import './Hero.css';
import chartImage from '../assets/chart.png'; // Place your image here

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="badge">The #1 go-to software for all things debt.</span>
        <h1>
          The operating<br />
          system of debt.
        </h1>
        <p>
          Full suite collections software, marketplace, and data tools designed
          for <strong>debt buyers, collection agencies, DFs, and creditors.</strong>
        </p>
        <button className="cta">Schedule a demo now</button>
      </div>
      <div className="hero-right">
        <img src={chartImage} alt="Dashboard visuals" />
      </div>
    </section>
  );
}

export default Hero;
