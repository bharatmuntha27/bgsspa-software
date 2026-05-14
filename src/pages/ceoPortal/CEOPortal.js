import React from "react";
import { useNavigate } from "react-router-dom";
import "./CEOPortal.css";

const CEOPortal = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="ceo-portal">
      <div className="ceo-header">
        <div>
          <h1>CEO Dashboard</h1>
          <p>Complete business overview for all spa branches.</p>
        </div>

        <button className="ceo-logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="ceo-stats-grid">
        <div className="ceo-stat-card">
          <h3>Total Revenue</h3>
          <h2>₹12.8L</h2>
          <span>+18% this month</span>
        </div>

        <div className="ceo-stat-card">
          <h3>Total Customers</h3>
          <h2>5,240</h2>
          <span>+320 new customers</span>
        </div>

        <div className="ceo-stat-card">
          <h3>Total Employees</h3>
          <h2>86</h2>
          <span>Across 12 branches</span>
        </div>

        <div className="ceo-stat-card">
          <h3>Total Appointments</h3>
          <h2>1,420</h2>
          <span>This month</span>
        </div>
      </div>

      <div className="ceo-content-grid">
        <div className="ceo-card">
          <h2>Branch Performance</h2>

          <div className="ceo-progress-item">
            <div>
              <span>Hyderabad</span>
              <strong>₹3.2L</strong>
            </div>
            <div className="ceo-progress-line">
              <div style={{ width: "82%" }}></div>
            </div>
          </div>

          <div className="ceo-progress-item">
            <div>
              <span>Bangalore</span>
              <strong>₹2.8L</strong>
            </div>
            <div className="ceo-progress-line">
              <div style={{ width: "74%" }}></div>
            </div>
          </div>

          <div className="ceo-progress-item">
            <div>
              <span>Chennai</span>
              <strong>₹2.1L</strong>
            </div>
            <div className="ceo-progress-line">
              <div style={{ width: "58%" }}></div>
            </div>
          </div>

          <div className="ceo-progress-item">
            <div>
              <span>Mumbai</span>
              <strong>₹4.7L</strong>
            </div>
            <div className="ceo-progress-line">
              <div style={{ width: "94%" }}></div>
            </div>
          </div>
        </div>

        <div className="ceo-card">
          <h2>Top Services</h2>

          <div className="ceo-service-box">
            <span>💆 Body Massage</span>
            <strong>42%</strong>
          </div>

          <div className="ceo-service-box">
            <span>🌿 Aromatherapy</span>
            <strong>28%</strong>
          </div>

          <div className="ceo-service-box">
            <span>✨ Facial Care</span>
            <strong>18%</strong>
          </div>

          <div className="ceo-service-box">
            <span>🧖 Steam Bath</span>
            <strong>12%</strong>
          </div>
        </div>
      </div>

      <div className="ceo-table-card">
        <h2>Business Overview</h2>

        <table>
          <thead>
            <tr>
              <th>Branch</th>
              <th>Revenue</th>
              <th>Customers</th>
              <th>Employees</th>
              <th>Appointments</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Hyderabad</td>
              <td>₹3.2L</td>
              <td>1,250</td>
              <td>22</td>
              <td>420</td>
              <td>
                <span className="ceo-status active">Active</span>
              </td>
            </tr>

            <tr>
              <td>Bangalore</td>
              <td>₹2.8L</td>
              <td>980</td>
              <td>18</td>
              <td>350</td>
              <td>
                <span className="ceo-status active">Active</span>
              </td>
            </tr>

            <tr>
              <td>Chennai</td>
              <td>₹2.1L</td>
              <td>760</td>
              <td>14</td>
              <td>280</td>
              <td>
                <span className="ceo-status review">Review</span>
              </td>
            </tr>

            <tr>
              <td>Mumbai</td>
              <td>₹4.7L</td>
              <td>1,620</td>
              <td>32</td>
              <td>510</td>
              <td>
                <span className="ceo-status active">Active</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CEOPortal;