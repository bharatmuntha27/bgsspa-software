import React from "react";
import "./Reports.css";

const Reports = () => {
  const reports = [
    { title: "Revenue Report", value: "₹2.4L", growth: "+18%" },
    { title: "Appointments", value: "320", growth: "+12%" },
    { title: "New Customers", value: "86", growth: "+24%" },
    { title: "Service Sales", value: "190", growth: "+9%" },
  ];

  return (
    <div className="reports-page">
      <div className="reports-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>Track revenue, appointments, customers and spa performance.</p>
        </div>

        <button className="export-report-btn">Export Report</button>
      </div>

      <div className="reports-stats">
        {reports.map((item, index) => (
          <div className="report-stat-card" key={index}>
            <h3>{item.title}</h3>
            <h2>{item.value}</h2>
            <span>{item.growth} this month</span>
          </div>
        ))}
      </div>

      <div className="reports-grid">
        <div className="chart-card">
          <h2>Monthly Revenue</h2>

          <div className="bar-chart">
            <div style={{ height: "45%" }}><span>Jan</span></div>
            <div style={{ height: "60%" }}><span>Feb</span></div>
            <div style={{ height: "50%" }}><span>Mar</span></div>
            <div style={{ height: "75%" }}><span>Apr</span></div>
            <div style={{ height: "90%" }}><span>May</span></div>
            <div style={{ height: "70%" }}><span>Jun</span></div>
          </div>
        </div>

        <div className="chart-card">
          <h2>Top Services</h2>

          <div className="service-progress">
            <div className="progress-item">
              <div>
                <span>Body Massage</span>
                <strong>85%</strong>
              </div>
              <div className="progress-line">
                <div style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Aromatherapy</span>
                <strong>72%</strong>
              </div>
              <div className="progress-line">
                <div style={{ width: "72%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Facial Treatment</span>
                <strong>64%</strong>
              </div>
              <div className="progress-line">
                <div style={{ width: "64%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Hair Spa</span>
                <strong>58%</strong>
              </div>
              <div className="progress-line">
                <div style={{ width: "58%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="report-table-card">
        <h2>Recent Report Summary</h2>

        <table>
          <thead>
            <tr>
              <th>Report</th>
              <th>Period</th>
              <th>Revenue</th>
              <th>Bookings</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Weekly Sales</td>
              <td>May 1 - May 7</td>
              <td>₹58,000</td>
              <td>76</td>
              <td><span className="report-status completed">Completed</span></td>
            </tr>

            <tr>
              <td>Monthly Revenue</td>
              <td>April 2026</td>
              <td>₹2,40,000</td>
              <td>320</td>
              <td><span className="report-status completed">Completed</span></td>
            </tr>

            <tr>
              <td>Customer Growth</td>
              <td>May 2026</td>
              <td>₹85,000</td>
              <td>98</td>
              <td><span className="report-status processing">Processing</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;