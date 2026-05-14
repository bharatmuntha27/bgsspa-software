import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Aromatherapy",
      duration: "60 mins",
      price: "₹2,500",
      category: "Relaxation",
      status: "Available",
    },
    {
      id: 2,
      name: "Body Massage",
      duration: "90 mins",
      price: "₹4,000",
      category: "Massage",
      status: "Available",
    },
    {
      id: 3,
      name: "Facial Treatment",
      duration: "45 mins",
      price: "₹3,000",
      category: "Skin Care",
      status: "Unavailable",
    },
    {
      id: 4,
      name: "Hair Spa",
      duration: "75 mins",
      price: "₹2,800",
      category: "Hair Care",
      status: "Available",
    },
  ];

  return (
    <div className="services-page">
      <div className="services-header">
        <div>
          <h1>Service Management</h1>
          <p>
            Manage spa treatments, pricing, categories and availability.
          </p>
        </div>

        <button className="add-service-btn">
          + Add Service
        </button>
      </div>

      <div className="services-stats">
        <div className="service-stat-card">
          <h3>Total Services</h3>
          <h2>24</h2>
        </div>

        <div className="service-stat-card">
          <h3>Popular Service</h3>
          <h2>Massage</h2>
        </div>

        <div className="service-stat-card">
          <h3>Monthly Revenue</h3>
          <h2>₹2.4L</h2>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-top">
              <div>
                <h2>{service.name}</h2>
                <p>{service.category}</p>
              </div>

              <span
                className={
                  service.status === "Available"
                    ? "service-status available"
                    : "service-status unavailable"
                }
              >
                {service.status}
              </span>
            </div>

            <div className="service-details">
              <div className="detail-box">
                <span>Duration</span>
                <strong>{service.duration}</strong>
              </div>

              <div className="detail-box">
                <span>Price</span>
                <strong>{service.price}</strong>
              </div>
            </div>

            <div className="service-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;