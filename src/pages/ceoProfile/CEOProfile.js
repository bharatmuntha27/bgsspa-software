import React from "react";
import { useNavigate } from "react-router-dom";
import "./CEOProfile.css";

const CEOProfile = () => {
  const navigate = useNavigate();

  const ceo = {
    name: "Arjun Mehta",
    ceoId: "CEO001",
    designation: "Chief Executive Officer",
    company: "SPA Management Pvt Ltd",
    dob: "15 August 1985",
    gender: "Male",
    doj: "01 January 2020",
    phone: "+91 98765 43210",
    email: "ceo@spa.com",
    address: "Hyderabad, India",
    branches: "12 Branches",
    employees: "86 Employees",
    revenue: "₹12.8L",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="ceo-profile-page">
      <div className="ceo-profile-header">
        <div className="ceo-profile-left">
          <img src={ceo.photo} alt={ceo.name} className="ceo-photo" />

          <div>
            <h1>{ceo.name}</h1>
            <p>{ceo.designation}</p>
            <span>{ceo.ceoId}</span>
          </div>
        </div>

        <button className="ceo-profile-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="ceo-profile-stats">
        <div className="ceo-profile-card">
          <h3>Total Branches</h3>
          <h2>{ceo.branches}</h2>
        </div>

        <div className="ceo-profile-card">
          <h3>Total Employees</h3>
          <h2>{ceo.employees}</h2>
        </div>

        <div className="ceo-profile-card">
          <h3>Monthly Revenue</h3>
          <h2>{ceo.revenue}</h2>
        </div>
      </div>

      <div className="ceo-details-card">
        <h2>CEO Personal Details</h2>

        <div className="ceo-details-grid">
          <div>
            <span>Full Name</span>
            <strong>{ceo.name}</strong>
          </div>

          <div>
            <span>CEO ID</span>
            <strong>{ceo.ceoId}</strong>
          </div>

          <div>
            <span>Company</span>
            <strong>{ceo.company}</strong>
          </div>

          <div>
            <span>Designation</span>
            <strong>{ceo.designation}</strong>
          </div>

          <div>
            <span>Date of Birth</span>
            <strong>{ceo.dob}</strong>
          </div>

          <div>
            <span>Gender</span>
            <strong>{ceo.gender}</strong>
          </div>

          <div>
            <span>Date of Joining</span>
            <strong>{ceo.doj}</strong>
          </div>

          <div>
            <span>Phone</span>
            <strong>{ceo.phone}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{ceo.email}</strong>
          </div>

          <div>
            <span>Address</span>
            <strong>{ceo.address}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOProfile;