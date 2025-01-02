import React from 'react';
import "./Hader.css"; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, white, blue)' }}>
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img
              src="logo/logo.png"
              alt="Logo"
              className="logo"
            />
          </Link>

          {/* Toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links and button */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Tarck Order</Link>
              </li>
            </ul>

            {/* Button */}
            <Link to="/get-started" className="btn btn-primary"style={{marginRight:"200px"}}>Contact</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
