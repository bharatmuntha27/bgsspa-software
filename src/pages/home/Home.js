import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="hero-content">
          <span className="hero-badge">Luxury Spa & Wellness</span>

          <h1>
            Relax, Refresh &
            <br />
            Rejuvenate
          </h1>

          <p>
            Experience premium spa treatments, body massage, skincare,
            aromatherapy and complete wellness care.
          </p>

          <div className="hero-actions">
            <Link to="/appointments" className="home-primary-btn">
              Book Appointment
            </Link>

            <Link to="/services" className="home-secondary-btn">
              View Services
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <h2>Premium Spa Care</h2>
          <p>Natural treatments by professional therapists.</p>

          <div className="hero-stats">
            <div>
              <h3>10+</h3>
              <span>Years</span>
            </div>

            <div>
              <h3>25+</h3>
              <span>Experts</span>
            </div>

            <div>
              <h3>5K+</h3>
              <span>Clients</span>
            </div>
          </div>
        </div>
      </section>

      <section className="luxury-hero">

  <div className="luxury-left">

    <span className="luxury-badge">
      ✨ Premium Wellness Experience
    </span>

    <h1>
      Discover True
      <span> Relaxation</span>
    </h1>

    <p>
      Escape into luxury spa therapies, rejuvenating massages,
      skincare treatments and wellness experiences designed
      to refresh your body and mind.
    </p>

    <div className="luxury-buttons">

      <Link to="/appointments" className="luxury-primary-btn">
        Book Appointment
      </Link>

      <Link to="/services" className="luxury-secondary-btn">
        Explore Services
      </Link>

    </div>

    <div className="luxury-features">

      <div className="feature-box">
        <h3>10+</h3>
        <span>Years Experience</span>
      </div>

      <div className="feature-box">
        <h3>25+</h3>
        <span>Expert Therapists</span>
      </div>

      <div className="feature-box">
        <h3>5K+</h3>
        <span>Happy Customers</span>
      </div>

    </div>

  </div>

  <div className="luxury-right">

    <div className="hero-circle"></div>

    <div className="hero-glass-card card-1">
      <h2>Body Massage</h2>
      <p>Relaxing premium therapy</p>
    </div>

    <div className="hero-glass-card card-2">
      <h2>Facial Care</h2>
      <p>Natural skincare treatment</p>
    </div>

    <div className="hero-main-image">
      <div className="image-overlay"></div>
    </div>

  </div>
  <section className="glass-section">
  <div className="glass-title">
    <span>WHY CHOOSE US</span>
    <h2>Luxury Wellness Experience</h2>
  </div>

  <div className="glass-grid">
    <div className="premium-glass-card">
      <div className="glass-icon">🌿</div>
      <h3>Natural Therapy</h3>
      <p>Organic oils and natural wellness treatments.</p>
    </div>

    <div className="premium-glass-card">
      <div className="glass-icon">💆</div>
      <h3>Expert Therapists</h3>
      <p>Professional staff trained in premium spa care.</p>
    </div>

    <div className="premium-glass-card">
      <div className="glass-icon">✨</div>
      <h3>Luxury Ambience</h3>
      <p>Peaceful interiors designed for complete relaxation.</p>
    </div>

    <div className="premium-glass-card">
      <div className="glass-icon">🧖</div>
      <h3>Wellness Care</h3>
      <p>Complete spa packages for body, skin and mind.</p>
    </div>
  </div>
</section>


</section>
<section className="showcase-section">

  <div className="showcase-header">
    <span>PREMIUM SERVICES</span>
    <h2>Our Signature Spa Treatments</h2>

    <p>
      Experience luxury wellness therapies designed to refresh
      your body, mind and soul.
    </p>
  </div>

  <div className="showcase-grid">

    <div className="showcase-card">
      <div className="showcase-image image-1"></div>

      <div className="showcase-content">
        <h3>Body Massage</h3>

        <p>
          Deep tissue and relaxing massage therapies for complete
          stress relief.
        </p>

        <div className="showcase-footer">
          <span>₹4,000</span>

          <Link to="/appointments">
            Book Now
          </Link>
        </div>
      </div>
    </div>

    <div className="showcase-card">
      <div className="showcase-image image-2"></div>

      <div className="showcase-content">
        <h3>Aromatherapy</h3>

        <p>
          Natural aroma oils and calming wellness experiences.
        </p>

        <div className="showcase-footer">
          <span>₹2,500</span>

          <Link to="/appointments">
            Book Now
          </Link>
        </div>
      </div>
    </div>

    <div className="showcase-card">
      <div className="showcase-image image-3"></div>

      <div className="showcase-content">
        <h3>Facial Care</h3>

        <p>
          Premium skincare and glow-enhancing facial treatments.
        </p>

        <div className="showcase-footer">
          <span>₹3,200</span>

          <Link to="/appointments">
            Book Now
          </Link>
        </div>
      </div>
    </div>

  </div>

</section>

<section className="modern-about-section">

  <div className="about-left">

    <div className="about-image-card">
      <div className="about-image-overlay"></div>
    </div>

    <div className="floating-experience-card">
      <h2>10+</h2>
      <span>Years Experience</span>
    </div>

  </div>

  <div className="about-right">

    <span className="about-tag">
      ABOUT OUR SPA
    </span>

    <h2>
      Luxury Wellness &
      <span> Relaxation Center</span>
    </h2>

    <p>
      We provide premium spa and wellness experiences with
      expert therapists, luxury treatment rooms, organic
      skincare products and modern relaxation therapies.
    </p>

    <div className="about-feature-list">

      <div className="about-feature">
        <div className="feature-icon">🌿</div>

        <div>
          <h3>Organic Treatments</h3>
          <p>Natural wellness therapies with premium oils.</p>
        </div>
      </div>

      <div className="about-feature">
        <div className="feature-icon">💆</div>

        <div>
          <h3>Professional Experts</h3>
          <p>Highly trained therapists for complete care.</p>
        </div>
      </div>

      <div className="about-feature">
        <div className="feature-icon">✨</div>

        <div>
          <h3>Luxury Ambience</h3>
          <p>Peaceful environment designed for relaxation.</p>
        </div>
      </div>

    </div>

    <Link to="/appointments" className="about-btn">
      Discover More
    </Link>

  </div>

</section>
<section className="premium-cta-section">

  <div className="cta-glow"></div>

  <div className="premium-cta-content">

    <span className="cta-tag">
      BOOK YOUR APPOINTMENT
    </span>

    <h2>
      Begin Your Journey To
      <span> Complete Relaxation</span>
    </h2>

    <p>
      Escape stress and experience luxury spa therapies,
      premium wellness care and rejuvenating treatments
      designed especially for you.
    </p>

    <div className="premium-cta-buttons">

      <Link
        to="/appointments"
        className="premium-cta-primary"
      >
        Schedule Appointment
      </Link>

      <Link
        to="/services"
        className="premium-cta-secondary"
      >
        Explore Services
      </Link>

    </div>

  </div>

  <div className="premium-cta-cards">

    <div className="mini-cta-card">
      <h3>5000+</h3>
      <span>Happy Customers</span>
    </div>

    <div className="mini-cta-card">
      <h3>25+</h3>
      <span>Professional Therapists</span>
    </div>

    <div className="mini-cta-card">
      <h3>4.9★</h3>
      <span>Top Rated Wellness Spa</span>
    </div>

  </div>

</section>
    </div>
  );
};

export default Home;