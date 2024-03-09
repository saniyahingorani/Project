import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Aheader() {
    return (
        <div>
            <div>
                {/* Topbar Start */}
                <div className="container-fluid bg-primary d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-dark py-2 pe-3 border-end border-white" href><i className="bi bi-telephone text-secondary me-2" />+012 345 6789</a>
                                    <a className="text-dark py-2 px-3" href><i className="bi bi-envelope text-secondary me-2" />info@example.com</a>
                                </div>
                            </div>
                            <div className="col-md-6 text-center text-lg-end">
                                <div className="d-inline-flex align-items-center">
                                    <a className="text-body py-2 px-3 border-end border-white" href>
                                        <i className="fab fa-facebook-f text-secondary" />
                                    </a>
                                    <a className="text-body py-2 px-3 border-end border-white" href>
                                        <i className="fab fa-twitter text-secondary" />
                                    </a>
                                    <a className="text-body py-2 px-3 border-end border-white" href>
                                        <i className="fab fa-linkedin-in text-secondary" />
                                    </a>
                                    <a className="text-body py-2 px-3 border-end border-white" href>
                                        <i className="fab fa-instagram text-secondary" />
                                    </a>
                                    <a className="text-body py-2 ps-3" href>
                                        <i className="fab fa-youtube text-secondary" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar Start */}
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm px-5 py-3 py-lg-0">
                    <a href="index.html" className="navbar-brand p-0">
                        <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-paint-roller text-secondary me-3" />Painter</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4 border-end border-5 border-primary">
                            <NavLink to="/dashboard" className="nav-item nav-link ">Dashboard</NavLink>
                            <NavLink to="/customer" className="nav-item nav-link">Customer</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="/categories" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Categories</NavLink>
                                <div className="dropdown-menu m-0">
                                    <Link to="/addcat" className="dropdown-item">Add Categories</Link>
                                    <Link to="/managecat" className="dropdown-item">Manage Categories</Link>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <NavLink to="/services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</NavLink>
                                <div className="dropdown-menu m-0">
                                    <Link to="/addservices" className="dropdown-item">Add Services</Link>
                                    <Link to="/manageservices" className="dropdown-item">Manage Services</Link>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <NavLink to="/services" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Employees</NavLink>
                                <div className="dropdown-menu m-0">
                                    <Link to="/addemployees" className="dropdown-item">Add Employees</Link>
                                    <Link to="/manageemployees" className="dropdown-item">Manage Employees</Link>
                                </div>
                            </div>
                            {/* <NavLink to="/mcontact" className="nav-item nav-link">Contact</NavLink> */}
                            <NavLink to="/admin-login" className="nav-item nav-link">LogIn</NavLink>
                            <NavLink to="/feedback" className="nav-item nav-link">Feedback</NavLink>
                        </div>
                        
                        <div className="d-none d-lg-flex align-items-center ps-4">
                            <i className="fa fa-2x fa-mobile-alt text-secondary me-3" />
                            <div>
                                <h5 className="text-primary mb-1"><small>Call Now</small></h5>
                                <h6 className="text-light m-0">+012 345 6789</h6>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}
            </div>

        </div>
    )
}

export default Aheader