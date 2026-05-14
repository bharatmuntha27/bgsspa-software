import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./MainLayout.css";
import Footer from "./Footer";
// import FloatingContact from "./FloatingContact";
const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`main-layout ${theme}`}>
      <div className="shape shape1"></div>
      <div className="shape shape2"></div>
      <div className="shape shape3"></div>
<Navbar theme={theme} toggleTheme={toggleTheme} />
<Sidebar />

<main className="page-content">
  {children}
</main>

<Footer />
{/* <FloatingContact /> */}

{/* <Footer /> */}
      
    </div>
  );
};

export default MainLayout;