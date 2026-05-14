import React from "react";
import "./Employees.css";

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "Meera Nair",
      role: "Senior Therapist",
      phone: "+91 98765 43210",
      experience: "6 Years",
      appointments: 42,
      status: "Available",
    },
    {
      id: 2,
      name: "Kavya Rao",
      role: "Massage Specialist",
      phone: "+91 91234 56780",
      experience: "4 Years",
      appointments: 35,
      status: "Busy",
    },
    {
      id: 3,
      name: "Riya Kapoor",
      role: "Skin Care Expert",
      phone: "+91 99887 76655",
      experience: "5 Years",
      appointments: 28,
      status: "On Leave",
    },
  ];

  return (
    <div className="employees-page">
      <div className="employees-header">
        <div>
          <h1>Employees</h1>
          <p>Manage therapists, staff availability and appointment workload.</p>
        </div>

        <button className="add-employee-btn">+ Add Employee</button>
      </div>

      <div className="employee-stats">
        <div className="employee-stat-card">
          <h3>Total Employees</h3>
          <h2>18</h2>
        </div>

        <div className="employee-stat-card">
          <h3>Available Today</h3>
          <h2>12</h2>
        </div>

        <div className="employee-stat-card">
          <h3>Appointments Assigned</h3>
          <h2>105</h2>
        </div>
      </div>

      <div className="employees-grid">
        {employees.map((employee) => (
          <div className="employee-card" key={employee.id}>
            <div className="employee-avatar">
              {employee.name.charAt(0)}
            </div>

            <h2>{employee.name}</h2>
            <p>{employee.role}</p>

            <div className="employee-info">
              <div>
                <span>Phone</span>
                <strong>{employee.phone}</strong>
              </div>

              <div>
                <span>Experience</span>
                <strong>{employee.experience}</strong>
              </div>

              <div>
                <span>Appointments</span>
                <strong>{employee.appointments}</strong>
              </div>
            </div>

            <span className={`employee-status ${employee.status.toLowerCase().replace(" ", "-")}`}>
              {employee.status}
            </span>

            <div className="employee-actions">
              <button className="profile-btn">Profile</button>
              <button className="schedule-btn">Schedule</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;