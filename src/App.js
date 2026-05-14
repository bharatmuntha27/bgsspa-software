import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/dashboard/Dashboard";
import Customers from "./pages/customers/Customers";
import Appointments from "./pages/appointments/Appointments";
import Services from "./pages/services/Services";
import Billing from "./pages/billing/Billing";
import Reports from "./pages/reports/Reports";
import Employees from "./pages/employees/Employees";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

import EmployeeLogin from "./pages/employeeLogin/EmployeeLogin";
import EmployeePortal from "./pages/employeePortal/EmployeePortal";

import CEOPortal from "./pages/ceoPortal/CEOPortal";
import CEOProfile from "./pages/ceoProfile/CEOProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* Main Website Layout */}
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
               
                <Route path="/" element={<Home />} />
                 <Route path="/ceo-portal" element={<CEOPortal />} />
                 <Route path="/ceo-profile" element={<CEOProfile />} />
              
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Other Pages */}
                <Route path="/customers" element={<Customers />} />

                <Route path="/appointments" element={<Appointments />} />

                <Route path="/services" element={<Services />} />

                <Route path="/billing" element={<Billing />} />

                <Route path="/reports" element={<Reports />} />

                <Route path="/employees" element={<Employees />} />

                <Route path="/employee-login" element={<EmployeeLogin />} />
                <Route path="/employee-portal" element={<EmployeePortal />} />
                <Route path="/login" element={<Login />} />

              </Routes>
            </MainLayout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;