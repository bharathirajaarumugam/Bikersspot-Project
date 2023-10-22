import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Admin/Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Admin() {
    var { user_id } = useParams()
    const [first_name, setFirstname] = useState('')
    const [last_name, setLastname] = useState('')
    useEffect(() => {
        fetch('http://localhost:3005/getone/' + user_id)
            .then(data => data.json())
            .then((res) => {
                setFirstname(res[0].first_name)
                setLastname(res[0].last_name)
            })
    }, [])
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
    return (
        <>
            <div class="container-fluid">
                <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                        <h1>Welcome To <FontAwesomeIcon icon={faUserTie} beatFade /> ADMIN</h1>
                        <Link to='/view'><button class="btn btn-outline-info">View User Details</button></Link>
                        <Link to='/Adminservice'><button class="btn btn-outline-warning">Update Service</button></Link>
                        <Link to='/UpdateService'><button class="btn btn-outline-success">Update Products</button></Link>
                        <Link to='/'><button className="\navbar-sign ms-2 btn btn-danger">Logout</button></Link>
                    </div>
                </nav>
            </div>
            <header>
                <a href="#" className="logo" src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.2.509566073.1686739486&semt=sph" alt="" />
            </header>

            <div class="landing" id="landing">
                <div className="about-me text-white">
                    <h1>Hi, <span className="uppercase">"   {first_name}{last_name}"</span> <FontAwesomeIcon icon={faHand} shake className="gitone" /></h1>
                    <h3>Welcome To the administrative Page</h3>
                    <p>
                        welcome and why successful administrative assistants should be able to communicate
                        with customers effectively and according to company standards. Being a good listener,
                        knowing how to handle complaints, and having excellent written and verbal skills are
                        all crucial to making the best impression on customers.
                    </p>
                    <div class="icons">
                        <a href="https://github.com/bharathirajaarumugam">
                            <FontAwesomeIcon icon={faGithub} beatFade className="gitone" />
                        </a>
                        <a href="https://www.instagram.com/bharathiraja661?igshid=YTQwZjQ0NmI0OA%3D%3D">
                            <FontAwesomeIcon icon={faInstagram} beatFade className="instaone" />
                        </a>
                        <a href="https://www.linkedin.com/in/bharathi-raja-21a402238/">
                            <FontAwesomeIcon icon={faLinkedin} beatFade className="linkedone" />
                        </a>
                    </div>
                </div>
                <img class="profile-pic" src="https://i.pinimg.com/236x/c2/28/63/c2286310ecd20730045c093025b72844.jpg" alt="" />
            </div>
            <h1 className="head-one text-white">Bikes</h1>
            <div class="skills-section" id="skills">
                <div class="skill-card bg-white">
                    <h2>Bike Cycle</h2>
                    <img className="imgone" src="https://i.pinimg.com/236x/7c/5e/57/7c5e571eb6ee93ffe3856408b910f644.jpg" alt="" />
                    <ul><br />
                        <li>Start wetting the bike from top to bottom </li>
                        <li>avoid direct contact with electrical bike ride</li>
                        <li>and mechanical spots first</li>
                        <button className="text-center btn btn-primary m-3">View Bike</button>
                    </ul>
                </div>
                <div class="skill-card bg-white">
                    <h2>Electric Bike</h2>
                    <br /><img className="imgtwo" class="rotate" src="https://i.pinimg.com/236x/2f/e3/e3/2fe3e3f91c3767152977191957098e51.jpg" alt="" />
                    <ul className="ulone"><br />
                        <br /><li>bike engine oil should be changed at least every 6</li>
                        <li>months Or after every 2,000 kilometer travel.</li>
                        <li>As a good bike owner of the company</li>
                        <button className="text-center btn btn-primary m-3">View Bike</button>
                    </ul>
                </div>
                <div class="skill-card bg-white">
                    <h2>Petrol Bike</h2>
                    <img className="img-three" src="https://i.pinimg.com/236x/48/82/cc/4882cc8094258ddd1a901a23ffe11097.jpg" alt="" />
                    <ul><br />
                        <li>The carburettor float chamber should be inspected and cleaned.</li>
                        <li>for every 1500 kilometres of usage. Also ensure </li>
                        <button className="text-center btn btn-primary m-3">View Bike</button>
                    </ul>
                </div>
            </div>
            <div class="project-section" id="projects">
                <h1 className="head-one text-white">Provided Services</h1>
                <div class="project-card bg-white">
                    <h1>
                        Machanic Service
                        <a href="https://github.com/Xokhezi">
                            <i id="gitHubIcon" class="gitone fab fa-github"></i>
                        </a>
                    </h1>
                    <img class="profile-pic" src="https://i.pinimg.com/236x/64/b6/90/64b69014733befbe6b15c4b7a61350a2.jpg" alt="" />
                    <p>
                        Analyse all the vital parts of the car, along with the safety and mechanical systems.
                    </p>
                </div>
                <div class="project-card bg-white">
                    <h1>
                        Delivery Service
                        <a href="https://instagram.com/tom.is.coding?igshid=NTc4MTIwNjQ2YQ==">
                            <i
                                id="instagramIcon"
                                class="instaone fab fa-instagram"
                            ></i>
                        </a>
                    </h1>
                    <img class="profile-pic" src="https://i.pinimg.com/236x/1f/43/2b/1f432bbc289520d81a2d88cd3d6ae88a.jpg" alt="" />
                    <p>
                        A service aimed at delivering a shipment to a destination it is similar to a postal service.
                    </p>
                </div>
                <div class="project-card bg-white">
                    <h1>Tire Service
                        <a href="https://instagram.com/tom.is.coding?igshid=NTc4MTIwNjQ2YQ==">
                            <i
                                id="instagramIcon"
                                class="instaone fab fa-instagram"
                            ></i>
                        </a>
                    </h1>
                    <img class="profile-pic" src="https://i.pinimg.com/236x/e8/3c/cc/e83ccc20c5b09d95e59aceada3f785f9.jpg" alt="" />
                    <p>
                        Inspection and maintenance of tires is about inspecting for wear and damage on tires
                        so that adjustments or measures can be made to take better care of the tires.
                    </p>
                </div>
            </div >
            <div class="container">
                <h1 className="head-one text-white">Famous Of Bike Companies In India</h1><br />
                <div class="row row-cols-1 row-cols-md-3 g-4 main">
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/c0/1f/9b/c01f9b1ceccce0b2d373082dfbe1f677.jpg" class="card-img-top h-25 w-25 mx-auto " alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>BAJAJ</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/0b/77/a6/0b77a61ba7f8810d715dedde29875272.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><br /><br /><b>TVS</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/db/cc/5f/dbcc5f7da90c74516ad1667c34575d81.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>KTM</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/45/f6/60/45f660eb3d6896a9f7b6f6538bd5e36f.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Royal Enfield</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/bb/be/51/bbbe515a03702ddae41dbb25f029fbc8.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Honda</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/23/40/d4/2340d495e2c2b3b49b1fce5183561392.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Yamaha</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/ad/c7/d9/adc7d9052c4a9c638df610bc2b0e7008.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Hero</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/c4/f2/d3/c4f2d3aaba611918d7b489bd2476f1f0.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Suzuki</b></h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card"><br />
                            <img src="https://i.pinimg.com/236x/19/b3/06/19b306956298808bf81c5efa5746b4bc.jpg" class="card-img-top h-25 w-25 mx-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center"><b>Kawaski</b></h5>
                            </div>
                        </div>
                    </div>
                </div><br/><br/>
            </div>
            <div class="container-fluid Main_Body text-white">
            <h1 className="head-one text-white">Contacts</h1><br />
                <div class="row row-cols-1 row-cols-md-4 g-4 pt-5 ">
                    <div class="row g-0 mt-5">
                        <div class="col-md-4 ">
                            <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/portfolio-about-me-img.png" class="img-fluid " alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-footer">Bikers Spots</h5>
                                <p class="card-text">Work Wide Famous Company</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0 mt-5">
                        <div class="col">
                            <div class="card-body">
                                <h5 class="card-footer">Phone No</h5>
                                <p class="card-text"><i class="fa-solid fa-phone"></i>9875893898</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0 mt-5">
                        <div class="col">
                            <div class="card-body">
                                <h5 class="card-footer">E-mail</h5>
                                <p class="card-text"><i class="fa-solid fa-envelope"></i>bikersspotted@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="row g-0 mt-5">
                        <div class="col">
                            <div class="card-body">
                                <h5 class="card-footer">Address</h5>
                                <p class="card-text"><i class="fa-solid fa-location-dot"></i>#202, Thunder street, Bolt nagar, Newyork-800620</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-white">
                <p><i
                    id="instagramIcon"
                    class="instaone     fab fa-instagram"
                ></i> @tom.is.coding</p>
            </footer>
        </>
    );
}