// src/components/Optimization.jsx
import React from 'react';
import './Optimization.css';
import optimizeImg from '../assets/optimization.png'; // Upload your image

function Optimization() {
  return (
    <section className="optimization">
      <div className="optimization-content">
        <div className="image">
          <img src={optimizeImg} alt="Optimization feature" />
        </div>
        <div className="text">
          <h2>Conversion Optimization</h2>
          <p>
          Conversion Optimization is at the heart of Kaizen Pay’s intelligent debt recovery system, empowering your team to boost collections with smart, data-driven automation. Our platform enables you to build seamless conversion workflows that adapt in real-time, targeting the right accounts at the right moments with precision messaging and optimized touchpoints. Whether you're running bulk campaigns or handling high-value portfolios, Kaizen Pay’s automation engine removes the guesswork and manual labor from the recovery process. From personalized outreach and self-service payment options to triggered reminders and performance tracking, every interaction is designed to increase engagement and drive resolution rates. Unlock higher ROI from your existing accounts with automated systems that work 24/7, ensuring every opportunity for recovery is maximized efficiently and compliantly.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Optimization;

