import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const revenueData = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 62000 },
    { month: "Mar", revenue: 54000 },
    { month: "Apr", revenue: 76000 },
    { month: "May", revenue: 85000 },
  ];

  const appointmentData = [
    { day: "Mon", bookings: 18 },
    { day: "Tue", bookings: 25 },
    { day: "Wed", bookings: 32 },
    { day: "Thu", bookings: 28 },
    { day: "Fri", bookings: 40 },
    { day: "Sat", bookings: 55 },
  ];

  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h1>Welcome to SPA Management System</h1>
        <p>Track your spa performance, revenue and appointments.</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h2>Customers</h2>
          <p>120 Active Clients</p>
        </div>

        <div className="dashboard-card">
          <h2>Appointments</h2>
          <p>45 Bookings Today</p>
        </div>

        <div className="dashboard-card">
          <h2>Revenue</h2>
          <p>₹85,000 This Month</p>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h2>Monthly Revenue</h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#00d4ff" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="analytics-card">
          <h2>Weekly Appointments</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={appointmentData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="bookings"
                stroke="#7c3aed"
                strokeWidth={4}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;