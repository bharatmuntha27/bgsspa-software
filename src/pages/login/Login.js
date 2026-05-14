import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("customer");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [ceoId, setCeoId] = useState("");
  const [password, setPassword] = useState("");

  const clearFields = () => {
    setEmail("");
    setEmployeeId("");
    setCeoId("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginType === "customer") {
      if (email === "customer@spa.com" && password === "12345") {
        navigate("/");
      } else {
        alert("Invalid Customer Email or Password");
      }
    }

    if (loginType === "employee") {
      if (employeeId === "EMP001" && password === "12345") {
        navigate("/employee-portal");
      } else {
        alert("Invalid Employee ID or Password");
      }
    }

    if (loginType === "ceo") {
      if (ceoId === "CEO001" && password === "admin123") {
        navigate("/ceo-portal");
      } else {
        alert("Invalid CEO ID or Password");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-shape shape-one"></div>
      <div className="login-shape shape-two"></div>

      <div className="login-card">
        <div className="login-brand">
          <h1>SPA</h1>
          <p>
            {loginType === "customer"
              ? "Customer Portal"
              : loginType === "employee"
              ? "Employee Portal"
              : "CEO Portal"}
          </p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <h2>
            {loginType === "customer"
              ? "Customer Login"
              : loginType === "employee"
              ? "Employee Login"
              : "CEO Login"}
          </h2>

          <p className="login-subtitle">
            Select login type and enter your credentials.
          </p>

          <div className="login-tabs three-tabs">

  <button
    type="button"
    className={loginType === "customer" ? "active-tab" : ""}
    onClick={() => {
      setLoginType("customer");
      clearFields();
    }}
  >
    Customer
  </button>

  <button
    type="button"
    className={loginType === "employee" ? "active-tab" : ""}
    onClick={() => {
      setLoginType("employee");
      clearFields();
    }}
  >
    Employee
  </button>

  <button
    type="button"
    className={loginType === "ceo" ? "active-tab" : ""}
    onClick={() => {
      setLoginType("ceo");
      clearFields();
    }}
  >
    CEO
  </button>

</div>

          {loginType === "customer" && (
            <div className="login-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="customer@spa.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          {loginType === "employee" && (
            <div className="login-group">
              <label>Employee ID</label>
              <input
                type="text"
                placeholder="EMP001"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
              />
            </div>
          )}

          {loginType === "ceo" && (
            <div className="login-group">
              <label>CEO ID</label>
              <input
                type="text"
                placeholder="CEO001"
                value={ceoId}
                onChange={(e) => setCeoId(e.target.value)}
                required
              />
            </div>
          )}

          <div className="login-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn-full">
            {loginType === "customer"
              ? "Customer Login"
              : loginType === "employee"
              ? "Employee Login"
              : "CEO Login"}
          </button>

          <p className="login-subtitle demo-text">
            {loginType === "customer" && (
              <>
                Demo: <strong>customer@spa.com</strong> / <strong>12345</strong>
              </>
            )}

            {loginType === "employee" && (
              <>
                Demo: <strong>EMP001</strong> / <strong>12345</strong>
              </>
            )}

            {loginType === "ceo" && (
              <>
                Demo: <strong>CEO001</strong> / <strong>admin123</strong>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;