import React from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeePortal.css";

const EmployeePortal = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const employee = {
    name: "Meera Nair",
    employeeId: "EMP001",
    dob: "12 March 1995",
    gender: "Female",
    doj: "10 January 2022",
    designation: "Senior Therapist",
    department: "Spa Therapy",
    phone: "+91 98765 43210",
    email: "meera@spa.com",
    address: "Hyderabad, India",
    shift: "09:00 AM - 06:00 PM",
    salary: "₹35,000",
    attendance: "94%",
    leaves: "2 Days",

    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  };

  return (
    <div className="employee-portal">

      {/* PROFILE HEADER */}

      <div className="employee-profile-header">

        <div className="employee-profile-left">

          <img
            src={employee.photo}
            alt={employee.name}
            className="employee-profile-photo"
          />

          <div>
            <h1>{employee.name}</h1>

            <p>{employee.designation}</p>

            <span>{employee.employeeId}</span>
          </div>

        </div>

        <button
          className="employee-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

      {/* STATS */}

      <div className="employee-portal-grid">

        <div className="employee-box">
          <h2>Attendance</h2>
          <p>{employee.attendance}</p>
        </div>

        <div className="employee-box">
          <h2>Working Hours</h2>
          <p>{employee.shift}</p>
        </div>

        <div className="employee-box">
          <h2>Leaves</h2>
          <p>{employee.leaves}</p>
        </div>

        <div className="employee-box">
          <h2>Salary</h2>
          <p>{employee.salary}</p>
        </div>

      </div>

      {/* PERSONAL DETAILS */}

      <div className="employee-details-card">

        <h2>Personal Details</h2>

        <div className="employee-details-grid">

          <div>
            <span>Full Name</span>
            <strong>{employee.name}</strong>
          </div>

          <div>
            <span>Employee ID</span>
            <strong>{employee.employeeId}</strong>
          </div>

          <div>
            <span>Date of Birth</span>
            <strong>{employee.dob}</strong>
          </div>

          <div>
            <span>Gender</span>
            <strong>{employee.gender}</strong>
          </div>

          <div>
            <span>Date of Joining</span>
            <strong>{employee.doj}</strong>
          </div>

          <div>
            <span>Designation</span>
            <strong>{employee.designation}</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>{employee.department}</strong>
          </div>

          <div>
            <span>Phone</span>
            <strong>{employee.phone}</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>{employee.email}</strong>
          </div>

          <div>
            <span>Address</span>
            <strong>{employee.address}</strong>
          </div>

        </div>

      </div>

      {/* APPOINTMENTS */}

      <div className="employee-details-card">

        <h2>Today's Appointments</h2>

        <table>

          <thead>
            <tr>
              <th>Time</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>10:30 AM</td>
              <td>Anjali Sharma</td>
              <td>Aromatherapy</td>
              <td>
                <span className="emp-status confirmed">
                  Confirmed
                </span>
              </td>
            </tr>

            <tr>
              <td>12:00 PM</td>
              <td>Priya Reddy</td>
              <td>Body Massage</td>
              <td>
                <span className="emp-status pending">
                  Pending
                </span>
              </td>
            </tr>

            <tr>
              <td>04:00 PM</td>
              <td>Sneha Kapoor</td>
              <td>Facial Treatment</td>
              <td>
                <span className="emp-status confirmed">
                  Confirmed
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default EmployeePortal;