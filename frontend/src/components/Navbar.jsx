import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token"); // Example auth check

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove authentication token
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          MyApp
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-item">
          Landing
        </Link>
        {isAuthenticated && (
          <>
            <Link to="/home" className="navbar-item">
              Home
            </Link>
            <Link to="/user/1" className="navbar-item">
              Users
            </Link>
          </>
        )}
      </div>
      <div className="navbar-auth">
        {isAuthenticated ? (
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
