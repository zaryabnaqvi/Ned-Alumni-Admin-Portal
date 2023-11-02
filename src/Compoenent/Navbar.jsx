import React from 'react';
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Ned Admin Portal</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/events">Manage Events</Link>
            </li>

           
            <li className="nav-item">
              <Link className="nav-link " to="/createEvents" tabIndex="-1" aria-disabled="true">Create Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/ManageEvents" tabIndex="-1" aria-disabled="true">Pending Events</Link>
            </li>
          </ul>
          <form className="d-flex justify-content-center">
         
            <button className="btn-nav btn mx-2" type="submit"><Link to="/login">Login</Link></button>
            <button className="btn-nav btn mx-2" type="submit"><Link to="/signup">Sign up</Link></button>

          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
