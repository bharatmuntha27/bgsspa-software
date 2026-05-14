import React from "react";
import "./Footer.css";

const Footer = () => {
  const cities = [
    { icon: "🏛️", name: "Ahmedabad" },
    { icon: "🛕", name: "Bangalore" },
    { icon: "🏯", name: "Chennai" },
    { icon: "🌴", name: "Cochin" },
    { icon: "🕌", name: "New Delhi" },
    { icon: "🏰", name: "Hyderabad" },
    { icon: "🌉", name: "Mumbai" },
    { icon: "🌁", name: "Rajahmundry" },
    { icon: "🏤", name: "Udaipur" },
    { icon: "🏢", name: "Jaipur" },
    { icon: "⛩️", name: "Kodaikanal" },
    { icon: "🕌", name: "Lucknow" },
    { icon: "🏖️", name: "Goa" },
    { icon: "🏛️", name: "Vadodara" },
  ];

  return (
    <footer className="spa-footer">
      <div className="footer-top-line">
        
        {/* <p>40+ Spa Outlets across India</p> */}
        
      </div>

      <h2>Find A Spa Near Me</h2>

      <p className="footer-desc">
        We have a strong nationwide presence, with outlets in five-star hotels,
        malls, high-end streets, and other prime locations.
        <br />
        Find your nearest wellness escape today!
      </p>

      <div className="city-grid">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <div className="city-icon">{city.icon}</div>
            <p>{city.name}</p>
          </div>
        ))}
      </div>

      <button
        className="scroll-top-btn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;