// src/components/Marketplace.jsx
import React from 'react';
import './Marketplace.css';
import marketplaceImg from '../assets/marketplace.png'; // Upload your image

function Marketplace() {
  return (
    <section className="marketplace">
      <div className="marketplace-content">
        <div className="text">
          <h2>Debt Marketplace</h2>
          <p>
          Connect with leading buyers and sellers, instantly browse portfolios, and streamline your entire deal workflow. Kaizen Pay empowers your organization with a fully integrated suite of tools to simplify collections, enhance compliance, and drive smarter decision-making. Gain access to verified debt portfolios in a trusted marketplace designed for transparency and efficiency. Leverage intuitive dashboards, automated processes, and AI-powered insights to boost your operational output while reducing overhead. With real-time analytics, customizable workflows, and seamless client onboarding, Kaizen Pay becomes the central hub for managing portfolios, executing agreements, and staying ahead of regulatory demands. Join a fast-growing network of agencies, creditors, and financial institutions already transforming their debt operations with our modern, data-driven approach—built for speed, security, and scale.
          </p>
        </div>
        <div className="image">
          <img src={marketplaceImg} alt="Marketplace preview" />
        </div>
      </div>
    </section>
  );
}

export default Marketplace;
