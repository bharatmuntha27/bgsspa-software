import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        SPA Management
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        {/* <Link to="/employee-login">Employee Login</Link> */}
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/customers">Customers</Link>

        <Link to="/services">Services</Link>

        <Link to="/appointments">Appointments</Link>

        <Link to="/employees">Employees</Link>

        <Link to="/billing">Billing</Link>

        <Link to="/reports">Reports</Link>

        <Link to="/login">Login</Link>
      </div>

      {/* Right Buttons */}
      <div className="navbar-right">

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>

      </div>

    </nav>
  );
};

export default Navbar;