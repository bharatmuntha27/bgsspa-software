import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">SPA</h2>

      <nav className="sidebar-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/customers">Customers</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/appointments">Appointments</NavLink>
        <NavLink to="/employees">Employees</NavLink>
        <NavLink to="/billing">Billing</NavLink>
        <NavLink to="/reports">Reports</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;