import React from "react";
import { Menu } from "../Menu/Menu";
import '../Navbar/Navbar.css';
// import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <div class="container-fluid nav-item">
                <Menu/>
                <div class="row m-5 justify-content-center text-align-center ">
                    <div class="col-sm-6 m-2 col order-sm-last order-md-first mt-5">
                        <h1 class="text-black">Hey, I am <span class="text-primary">BHARATHIRAJA</span></h1>
                        <h5 class="text-black">I am a Full Stack Developer...</h5>
                        <button type="button" class="btn text-white bg-primary">contact</button>
                    </div>
                </div>

                {/* <div className="welcome-home">
                    <div class="box-of-star1">
                        <div class="star star-position1"></div>
                        <div class="star star-position2"></div>
                        <div class="star star-position3"></div>
                        <div class="star star-position4"></div>
                        <div class="star star-position5"></div>
                        <div class="star star-position6"></div>
                        <div class="star star-position7"></div>
                    </div>
                    <div class="box-of-star2">
                        <div class="star star-position1"></div>
                        <div class="star star-position2"></div>
                        <div class="star star-position3"></div>
                        <div class="star star-position4"></div>
                        <div class="star star-position5"></div>
                        <div class="star star-position6"></div>
                        <div class="star star-position7"></div>
                    </div>
                    <div class="box-of-star3">
                        <div class="star star-position1"></div>
                        <div class="star star-position2"></div>
                        <div class="star star-position3"></div>
                        <div class="star star-position4"></div>
                        <div class="star star-position5"></div>
                        <div class="star star-position6"></div>
                        <div class="star star-position7"></div>
                    </div>
                    <div class="box-of-star4">
                        <div class="star star-position1"></div>
                        <div class="star star-position2"></div>
                        <div class="star star-position3"></div>
                        <div class="star star-position4"></div>
                        <div class="star star-position5"></div>
                        <div class="star star-position6"></div>
                        <div class="star star-position7"></div>
                    </div>
                    <div data-js="astro" class="astronaut">
                        <div class="head"></div>
                        <div class="arm arm-left"></div>
                        <div class="arm arm-right"></div>
                        <div class="body">
                            <div class="panel"></div>
                        </div>
                        <div class="leg leg-left"></div>
                        <div class="leg leg-right"></div>
                        <div class="schoolbag"></div>
                    </div>
                </div> */}
            </div>
        </>
    );
}