import React from 'react';
import { Link } from "react-router-dom"

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
              <div class="dropdown" className="nav-link" aria-current="page" >
                <button 
                  class="btn btn-link nav-link dropdown-toggle" 
                  type="button" 
                  id="eventsDropdown" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Events
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="eventsDropdown">
                  <li><a class="dropdown-item" href="/events">Manage Events</a></li>
                  <li><a class="dropdown-item" href="/createEvents">Create Events</a></li>
                  <li><a class="dropdown-item" href="/ManageEvents">Pending Events</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div class="dropdown" className="nav-link" aria-current="page" >
                <button
                  class="btn btn-link nav-link dropdown-toggle"
                  type="button"
                  id="specialOccassionDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Special Occassion
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="specialOccassionDropdown">
                  <li><a class="dropdown-item" href="/Occassion">Manage Special Occassion</a></li>
                  <li><a class="dropdown-item" href="/createOccassion">Create Special Occassion</a></li>
                  <li><a class="dropdown-item" href="/ManageOccassion">Pending Special Occassion</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div class="dropdown" className="nav-link" aria-current="page" >
                <button
                  class="btn btn-link nav-link dropdown-toggle"
                  type="button"
                  id="AlumniProjectsDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Alumni Supported Projects
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="AlumniProjectsDropdown">
                  <li><a class="dropdown-item" href="/AlumniProjects">Manage Alumni Supported Projects</a></li>
                  <li><a class="dropdown-item" href="/createAlumniProjects">Create Alumni Supported Projects</a></li>
                  <li><a class="dropdown-item" href="/ManageAlumniProjects">Pending Special Occassion</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div class="dropdown" className="nav-link" aria-current="page" >
                <button
                  class="btn btn-link nav-link dropdown-toggle"
                  type="button"
                  id="PotentialProjectsDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Potential Projects
                </button>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="PotentialProjectsDropdown">
                  <li><a class="dropdown-item" href="/PotentialProjects">Manage Potential Projects</a></li>
                  <li><a class="dropdown-item" href="/createPotentialProjects">Create Potential Projects</a></li>
                  <li><a class="dropdown-item" href="/ManagePotentialProjects">Pending Potential Projects</a></li>
                </ul>
              </div>
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