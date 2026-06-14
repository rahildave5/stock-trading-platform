import React from "react";
import navLogo from "../../../images/logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container" style={{ padding: "0 75px" }}>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#fff", borderBottom: "1px solid #e6e6e6" }}
      >
        <div className="container-fluid" style={{ padding: "0.5rem 0" }}>
          <Link className="navbar-brand" to="/" style={{ margin: 0 }}>
            <img
              src={navLogo}
              alt="Logo"
              style={{ width: "34%", display: "block" }}
            />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
