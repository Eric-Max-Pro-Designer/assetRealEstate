import React from "react";

function Navbar() {
  return (
    <div className="container-fluid nav-bar bg-transparent">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <a href="/" className="navbar-brand d-flex align-items-center text-center">
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src="../../public/Logo.png"
              alt="icon"
              style={{ width: "100px", height: "50px" }}
            />
          </div>
          {/* <h1 className="m-0 text-primary">Asset Real Estate</h1> */}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <a href="/" className="nav-item nav-link">Home</a>
            <a href="/buy" className="nav-item nav-link">Buy</a>
            <a href="/rent" className="nav-item nav-link">Rent</a>
            <a href="/sell" className="nav-item nav-link">Sell</a>

            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Property
              </a>
              <div className="dropdown-menu rounded-0 m-0">
                <a href="#" className="dropdown-item">Appartment</a>
                <a href="#" className="dropdown-item">Family House</a>
                <a href="#" className="dropdown-item">Commercial House</a>
              </div>
            </div>

            <a href="/contact" className="nav-item nav-link active">
              Contact
            </a>
          </div>

          <a href="#" className="btn btn-primary px-3 d-none d-lg-flex">
            SignUp
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;