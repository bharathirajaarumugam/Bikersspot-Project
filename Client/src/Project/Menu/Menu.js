import React from "react";
import '../Menu/Menu.css';
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <><section>
      <nav>
        <div class="logo">
          <img src="https://c4.wallpaperflare.com/wallpaper/402/48/977/5k-husqvarna-vitpilen-701-concept-bikes-wallpaper-preview.jpg" />
        </div>
        <div class="container-fluid">
        <h1 className="menu-nav-head">
        <span class="navbar-toggler-icon"></span>
        <span className="span1">Bikers.</span><span className="span2">Spot</span></h1>
        </div>
        <ul class="nav-links">
          <li><a href="#home" className="hover-underline-animation">Home</a></li>
          <li><a href="#about" className="hover-underline-animation">About</a></li>
          <li><a href="#service" className="hover-underline-animation">Service</a></li>
          <li><a href="#apps" className="hover-underline-animation">Apps</a></li>
          <li><a href="#contact" className="hover-underline-animation">Contact</a></li>
          <li><Link class="nav-link" to="/Signin"><button className='menu-button'>Login</button></Link></li>
          <li><Link class="nav-link" to="/Signup"><button className='menu-button'>SignUp</button></Link></li>
          <li><a href="/" className='hover-underline-animation'>Back</a></li>
        </ul>
        <div class="icons">
          <a href="https://github.com/Xokhezi">
            <i id="gitHubIcon" class="gitone fab fa-github"></i>
          </a>
          <a href="https://instagram.com/tom.is.coding?igshid=NTc4MTIwNjQ2YQ==">
            <i
              id="instagramIcon"
              class="instaone fab fa-instagram"
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/tom%C3%A1%C5%A1-n%C4%9Bmec-2501ab1b7/">
            <i
              id="linkedinIcon"
              class="linkedone fab fa-linkedin"
            ></i>
          </a>
        </div>
      </nav>
    </section>
    </>
  );
}