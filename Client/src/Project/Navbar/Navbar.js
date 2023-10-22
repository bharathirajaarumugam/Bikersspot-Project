import React from "react"
import './Navbar.css'
import { Link } from "react-router-dom";
export function Navbar() {
    return (
        <>
            <div class="container">
                <div class="navbar">
                    <nav class="navbar-item">
                        <ul>
                            <li><Link class="active" to="/">About Us</Link></li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">ShowRoom</Link></li>
                            <li><Link to="/">Service</Link></li>
                            <li><Link to="/">Booking</Link></li>
                            <li><Link to="/">Login</Link></li>
                            <li><Link to="/">SignUp</Link></li>
                        </ul>
                    </nav>
                </div>
                {/* <div class="row">
                    <div class="col-1">
                        <h1>WELCOME</h1><br />
                        <h2>BHARATHIRAJA <br /></h2>
                        <h4>Aspiring Full Stack Developer</h4>
                        <h3>From Dindigul bought up in Coimbatore</h3>
                        <p>(B.SC.CS and M.Sc CS Finished)</p>
                        <h4>Phone Number : 6369517296</h4>
                        <button type="button">Resume</button>
                    </div>
                    <div class="col-2">
                        <div class="color-box">
                            <div class="ad-btn">
                                <img src="" />
                                <p><small>Hello <br />Welcome</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-one">
                    <div class="front-face">
                        <h1>ABOUT US</h1>
                        <div class="cover">
                            <img src="./images/newphoto.png" class="profile" /><br />
                        </div> */}
                        {/* <div class="name">Bharathiraja</div>
                        <div class="tag">Full Stack Developer</div><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae non dolor inventore,
                            aspernatur sapiente deleniti tempora atque, veritatis placeat corrupti impedit porro quis
                            corporis soluta temporibus. Labore ea ipsam nulla!
                        </p><br />
                        </div>
                        <div class="back-face">
                        <h3>Job Description</h3>
                        <p class="abouts">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos
                            et voluptatibus provident sequi nulla aspernatur esse minima adipisci laborum,
                            quod eius quaerat aliquid totam praesentium amet repellat. Omnis, quia.Lorem
                            ipsum dolor sit amet consectetur, adipisicing elit. Id, ipsam et! Dolor</p> */}
                        {/* <i class="fa-brands fa-facebook"></i> */}
                        {/* <i class="fa-brands fa-instagram"></i> */}
                        {/* <i class="fa-brands fa-youtube"></i> */}
                        {/* <i class="fa-brands fa-whatsapp"></i> */}
                    {/* </div>
                </div> */}
            </div>
        </>
    );
}