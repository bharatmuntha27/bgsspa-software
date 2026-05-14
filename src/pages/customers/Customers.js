import React from "react";
import "./Customers.css";

const Customers = () => {
  const customers = [
    {
      id: 1,
      name: "Anjali Sharma",
      phone: "+91 98765 43210",
      service: "Aromatherapy",
      visits: 12,
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Reddy",
      phone: "+91 91234 56780",
      service: "Body Massage",
      visits: 8,
      status: "Active",
    },
    {
      id: 3,
      name: "Sneha Kapoor",
      phone: "+91 99887 76655",
      service: "Facial Treatment",
      visits: 5,
      status: "Inactive",
    },
  ];

  return (
    <div className="customers-page">
      <div className="customers-header">
        <div>
          <h1>Customers</h1>
          <p>Manage spa customer records, visits and service history.</p>
        </div>

        <button className="add-customer-btn">+ Add Customer</button>
      </div>

      <div className="customer-stats">
        <div className="stat-box">
          <h3>Total Customers</h3>
          <h2>120</h2>
        </div>

        <div className="stat-box">
          <h3>Active Customers</h3>
          <h2>98</h2>
        </div>

        <div className="stat-box">
          <h3>New This Month</h3>
          <h2>24</h2>
        </div>
      </div>

      <div className="customers-table-card">
        <div className="table-top">
          <h2>Customer List</h2>
          <input type="text" placeholder="Search customer..." />
        </div>

        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Preferred Service</th>
              <th>Visits</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{customer.service}</td>
                <td>{customer.visits}</td>
                <td>
                  <span
                    className={
                      customer.status === "Active"
                        ? "status active"
                        : "status inactive"
                    }
                  >
                    {customer.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;