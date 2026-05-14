import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeLogin.css";

const EmployeeLogin = () => {
  const navigate = useNavigate();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");

  const handleEmployeeLogin = (e) => {
    e.preventDefault();

    if (employeeId === "EMP001" && password === "12345") {
      navigate("/employee-portal");
    } else {
      alert("Invalid Employee ID or Password");
    }
  };

  return (
    <div className="employee-login-page">
      <div className="employee-login-card">
        <div className="employee-login-left">
          <h1>Employee Portal</h1>
          <p>Login with Employee ID and password.</p>
        </div>

        <form className="employee-login-form" onSubmit={handleEmployeeLogin}>
          <h2>Employee Login</h2>

          <div className="employee-form-group">
            <label>Employee ID</label>
            <input
              type="text"
              placeholder="EMP001"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
            />
          </div>

          <div className="employee-form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="employee-login-btn">
            Employee Login
          </button>

          <p className="demo-login">
            Demo: <strong>EMP001</strong> / <strong>12345</strong>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EmployeeLogin;