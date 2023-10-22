import React from "react";
import '../Menu/Menu.css';
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid col-8">
        <h1 className="menu-nav-head">Bike Ride</h1>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse col-4 m-2" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="">Services</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="">About Us</Link>
              </li>
              {/* <li class="nav-item">
              <Link class="nav-link" to="">Gallery</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="">Videos</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="">Testimonials</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="">Contact Us</Link>
              </li> */}
              </ul>
              <div className='d-flex button_space'>
              <div >
                <Link class="nav-link" to="/Signin"><button className='navbar-sign ms-2 btn btn-primary'>Login</button></Link>
              </div>
              <div>
                <Link class="nav-link" to="/Signup"><button className='navbar-sign ms-2 btn btn-primary'>Sign Up</button></Link>
              </div>
            </div>
        </div>
      </nav> 
    </>
  );
}