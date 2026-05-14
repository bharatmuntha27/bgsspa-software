import React from "react";
import "./Appointments.css";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      customer: "Anjali Sharma",
      service: "Aromatherapy",
      therapist: "Meera",
      date: "2026-05-13",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Priya Reddy",
      service: "Body Massage",
      therapist: "Kavya",
      date: "2026-05-13",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      customer: "Sneha Kapoor",
      service: "Facial Treatment",
      therapist: "Riya",
      date: "2026-05-14",
      time: "04:00 PM",
      status: "Cancelled",
    },
  ];

  return (
    <div className="appointments-page">
      <div className="appointments-header">
        <div>
          <h1>Appointment Booking</h1>
          <p>Create, schedule and manage spa appointments.</p>
        </div>
      </div>

      <div className="appointment-layout">
        <div className="booking-card">
          <h2>Book New Appointment</h2>

          <form className="booking-form">
            <div className="form-group">
              <label>Customer Name</label>
              <input type="text" placeholder="Enter customer name" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter phone number" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Service</label>
                <select>
                  <option>Aromatherapy</option>
                  <option>Body Massage</option>
                  <option>Facial Treatment</option>
                  <option>Hair Spa</option>
                  <option>Steam Bath</option>
                </select>
              </div>

              <div className="form-group">
                <label>Therapist</label>
                <select>
                  <option>Meera</option>
                  <option>Kavya</option>
                  <option>Riya</option>
                  <option>Neha</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>Time</label>
                <input type="time" />
              </div>
            </div>

            <div className="form-group">
              <label>Notes</label>
              <textarea placeholder="Add appointment notes"></textarea>
            </div>

            <button type="button" className="book-btn">
              Book Appointment
            </button>
          </form>
        </div>

        <div className="schedule-card">
          <div className="schedule-top">
            <h2>Today&apos;s Schedule</h2>
            <span>3 Appointments</span>
          </div>

          <div className="appointment-list">
            {appointments.map((item) => (
              <div className="appointment-item" key={item.id}>
                <div className="time-box">
                  <strong>{item.time}</strong>
                  <span>{item.date}</span>
                </div>

                <div className="appointment-info">
                  <h3>{item.customer}</h3>
                  <p>{item.service} • {item.therapist}</p>
                </div>

                <span className={`appointment-status ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;