import React from "react";
import "./Billing.css";

const Billing = () => {
  const invoices = [
    {
      id: "INV-001",
      customer: "Anjali Sharma",
      service: "Aromatherapy",
      amount: "₹2,500",
      method: "UPI",
      date: "2026-05-13",
      status: "Paid",
    },
    {
      id: "INV-002",
      customer: "Priya Reddy",
      service: "Body Massage",
      amount: "₹4,000",
      method: "Card",
      date: "2026-05-13",
      status: "Pending",
    },
    {
      id: "INV-003",
      customer: "Sneha Kapoor",
      service: "Facial Treatment",
      amount: "₹3,000",
      method: "Cash",
      date: "2026-05-12",
      status: "Failed",
    },
  ];

  return (
    <div className="billing-page">
      <div className="billing-header">
        <div>
          <h1>Billing</h1>
          <p>Manage invoices, payments and customer billing records.</p>
        </div>

        <button className="create-invoice-btn">+ Create Invoice</button>
      </div>

      <div className="billing-stats">
        <div className="billing-stat-card">
          <h3>Total Revenue</h3>
          <h2>₹85,000</h2>
        </div>

        <div className="billing-stat-card">
          <h3>Paid Invoices</h3>
          <h2>156</h2>
        </div>

        <div className="billing-stat-card">
          <h3>Pending Amount</h3>
          <h2>₹12,500</h2>
        </div>
      </div>

      <div className="invoice-card">
        <div className="invoice-top">
          <h2>Recent Invoices</h2>
          <input type="text" placeholder="Search invoice..." />
        </div>

        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Customer</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Payment</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.customer}</td>
                <td>{invoice.service}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.method}</td>
                <td>{invoice.date}</td>
                <td>
                  <span className={`invoice-status ${invoice.status.toLowerCase()}`}>
                    {invoice.status}
                  </span>
                </td>
                <td>
                  <button className="invoice-view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;