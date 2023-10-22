import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../User/User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function User() {
    var { id } = useParams()
    const [first_name, setFirstname] = useState('')
    const [last_name, setLastname] = useState('')
    useEffect(() => {
        fetch('http://localhost:3005/getone/' + id)
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
            <nav>
                <div class="logo text-white">
                    <img src="https://c4.wallpaperflare.com/wallpaper/402/48/977/5k-husqvarna-vitpilen-701-concept-bikes-wallpaper-preview.jpg" />
                </div>
                <div class="container-fluid text-white">
                    <h1>Welcome <FontAwesomeIcon icon={faUserTie} beatFade /> User</h1>

                </div>
                <ul class="nav-links">
                    <li><a href="#landing" className="hover-underline-animation">Home</a></li>
                    <li><a href="#skills" className="hover-underline-animation">Work</a></li>
                    <li><a href="#projects" className="hover-underline-animation">News</a></li>
                    <li><a href="#explore" className="hover-underline-animation">Explore</a></li>
                    <li><a href="#contact" className="hover-underline-animation">Contact</a></li>
                    <Link to='/Availableservice'><button class="btn btn-outline-info">Service</button></Link>
                    <Link to='/Useravailableproduct'><button class="btn btn-outline-success">Product</button></Link>
                    <Link to='/Userbookstatus'><button class="btn btn-outline-warning">Status</button></Link>
                    <Link to='/'><button className="\navbar-sign ms-2 btn btn-danger">Logout</button></Link>
                </ul>
            </nav>
            <div class="landing" id="landing">
                <div className="about-me text-white">
                    <h1>Hi, <span className="uppercase">{first_name}{last_name}</span> <FontAwesomeIcon icon={faHand} shake className="gitone" /></h1>
                    <h3>Welcome to User page</h3>
                    <p>
                        We are happy to have you join our online community!For the most recent information,
                        advice, and deals,follow us. We appreciate your visit and are here to make it pleasant
                        and memorable.If you have any questions or need assistance, don’t hesitate to drop us a
                        message or leave a comment below. Our team is always here to help. Stay tuned for exciting
                        content and surprises! Let’s make this journey together.
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
                <img class="profile-pic" src="https://i.pinimg.com/564x/d0/7b/51/d07b51aa1fbd871620c804e602ac2a29.jpg" alt="" />
            </div>
            <h1 className="head-one text-white">Kind of Work</h1>
            <div class="skills-section" id="skills">

                <div class="skill-card bg-white">
                    <h2>Bike Water Service</h2>
                    <img className="imgone" src="https://i.pinimg.com/236x/ee/55/9e/ee559e05067b84b3f6b0c83b70b9fe1b.jpg" alt="" />
                    <ul><br />
                        <li>Start wetting the bike from top to bottom </li>
                        <li>avoid direct contact with electrical bike ride</li>
                        <li>and mechanical spots first</li>
                        <button className="text-center btn btn-primary p-2 m-3">View Service</button>
                    </ul>
                </div>
                <div class="skill-card bg-white">
                    <h2>Bike Oil Service</h2>
                    <br /><img className="imgtwo" class="rotate" src="https://i.pinimg.com/236x/44/e8/64/44e864e845adfc50e022b7db8b5eba4b.jpg" alt="" />
                    <ul className="ulone"><br />
                        <br /><li>bike engine oil should be changed at least every 6</li>
                        <li>months Or after every 2,000 kilometer travel.</li>
                        <li>As a good bike owner of the company</li>
                        <button className="text-center btn btn-primary p-2 m-3">View Service</button>
                    </ul>
                </div>
                <div class="skill-card bg-white">
                    <h2>Bike General Service</h2>
                    <img className="img-three" src="https://i.pinimg.com/564x/e2/2d/66/e22d668135fad38ade3370d44af9f199.jpg" alt="" />
                    <ul><br />
                        <li>The carburettor float chamber should be inspected and cleaned.</li>
                        <li>for every 1500 kilometres of usage. Also ensure </li>
                        <button className="text-center btn btn-primary p-2 m-3">View Service</button>
                    </ul>
                </div>
            </div>
            <div class="project-section" id="projects">
                <h1 className="head-one text-white">What Latest News Now?</h1>
                <div class="project-card bg-white">
                    <h1>
                        Avoid Accident
                        <a href="https://github.com/bharathirajaarumugam">
                            <FontAwesomeIcon icon={faGithub} beatFade className="gitone" />
                        </a>
                    </h1>
                    <img className="imgone" src="https://i.pinimg.com/236x/53/3d/59/533d5984440b24b86ec00fc9bd2ddea7.jpg" alt="" />
                    <p>
                        Whenever you go out on the road with your motorcycle, always choose a lane,
                        preferably the left side of the road. Avoid commuting through the middle as
                        other vehicles might be in a hurry, keep a safe distance from other vehicles.
                    </p>
                </div>
                <div class="project-card bg-white">
                    <h1>
                        Safety First
                        <a href="https://www.instagram.com/bharathiraja661?igshid=YTQwZjQ0NmI0OA%3D%3D">
                            <FontAwesomeIcon icon={faInstagram} beatFade className="instaone" />
                        </a>
                    </h1>
                    <img className="imgone" src="https://i.pinimg.com/236x/7e/91/00/7e91007a796c59a6b73ef545e5e8018d.jpg" alt="" />
                    <p>
                        Wear a helmet. A helmet can’t be 100 percent guaranteed to save your life,
                        but it’s always going to give you better odds than going bare headed.

                    </p>
                </div>
                <div class="project-card bg-white">
                    <h1>Follow Traffic Rules
                    <a href="https://www.linkedin.com/in/bharathi-raja-21a402238/">
                            <FontAwesomeIcon icon={faLinkedin} beatFade className="linkedone" />
                        </a>
                    </h1>
                    <img className="imgone" src="https://i.pinimg.com/236x/f8/d6/f1/f8d6f1c794df6d2091d3279b2a60f75e.jpg" alt="" />
                    <p>
                        Obey traffic signals and signs
                        Follow posted speed limits
                        Avoid distractions such as phone calls while driving
                        Always wear a seat belt
                        Maintain your vehicle and ensure it functions properly
                        Avoid aggressive driving
                        Be aware of your highlight.
                    </p>
                </div>
            </div >

            <div class="container-fluid">
                <h2 className="text-center text-white" id="explore">Explore Deals & Offers</h2><br />
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-3">
                        <div class="card border-0">
                            <h4>Up to 30% Off | Bikes & Gadgets</h4>
                            <div class="row">

                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/9d/56/01/9d5601fa9042a46b86c6f1376ce33925.jpg"
                                            class="watch" alt="" />
                                        <p class="card-text">Royal Enfield</p>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/c8/d6/03/c8d603f39bdbd51be019c843a2649ddc.jpg"
                                            class="camera" alt="" />
                                        <p class="card-text">Yemaga R15</p>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/21/6f/c8/216fc8f73cc27a50bacff4d7bb6ff83c.jpg"
                                            class="Sports" alt="" />
                                        <p class="card-text">Pulsar NS 200</p>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/f3/65/f3/f365f39258d1372bf3d210c0a09ae48b.jpg"
                                            class="Earphones" alt="" />
                                        <p class="card-text">MT 120</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="gadgets mt-2">See All Details <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!-- sect2 --> */}
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-3">
                        <div class="card border-0">
                            <h4>Festive Super Bikes & Accessories</h4>
                            <div class="row">

                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/cc/44/67/cc4467c8868b923dde4d6124fbc2e85b.jpg"
                                            class="tv" alt="" />
                                        <p class="card-text">NINJA H24</p>
                                    </div><br />
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/aa/17/1f/aa171fb8bdc2db4e6ee2d1b46cf29c0d.jpg"
                                            class="tv" alt="" />
                                        <p class="card-text">SUPER 320</p>
                                    </div><br />
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/80/91/7f/80917fa40933fdf7ec2ddd7bd042b6c6.jpg"
                                            class="tv" alt="" />
                                        <p class="card-text">BMW 140</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="gadgets mt-2">See All Details <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    {/* <!-- sect3 --> */}
                    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-3">
                        <div class="card border-0">
                            <h4>Under Rs 4000 | Friendly Accessories</h4>
                            <div class="row">

                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/564x/0b/d3/cc/0bd3cc14d4c564438c57b2a5e2268a50.jpg"
                                            class="tablet" alt="" />
                                        <p class="card-text">Helmet</p>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/62/ea/96/62ea9622730e96261a9d065a679e39e5.jpg"
                                            class="play" alt="" />
                                        <p class="card-text">Clouses</p>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/fb/f2/7a/fbf27aede38d647ba1020a8e92a5724c.jpg"
                                            class="Speaker" alt="" />
                                        <p class="card-text">Mirrors</p>
                                    </div>
                                </div>
                                <div class="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 p-4 g-2">
                                    <div class="card">
                                        <img src="https://i.pinimg.com/236x/81/8c/4b/818c4b36ead6e9ce7b5b44efa7f2cba2.jpg"
                                            class="virtual" alt="" />
                                        <p class="card-text">Light</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" class="gadgets mt-2">See All Details <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                </div>
            </div><br/><br/><br/><br/>
            <div id="contact" class="container-fluid text-white">
                <h1 className="text-center"><u>Contact Us</u></h1>
                <div class="row Cus-FooterBody p-5">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center align-items-center">
                                <img class="w-50"
                                    src="https://i.pinimg.com/236x/77/d4/8b/77d48b1cad24272edf6da272fe14e36a.jpg"
                                    alt="flybuy-logo"/>
                            </div>
                            <div class="col-12 mt-4 d-sm-flex justify-content-sm-center">
                                <i class="fa-brands fa-google Cus-Icon fa-2x p-3 rounded-circle"></i>
                                <i class="fa-brands fa-twitter Cus-Icon fa-2x p-3 rounded-circle"></i>
                                <i class="fa-brands fa-instagram Cus-Icon fa-2x p-3 rounded-circle"></i>
                                <i class="fa-brands fa-linkedin Cus-Icon fa-2x p-3 rounded-circle"></i>
                            </div>
                            <div class="col-12 py-2">
                                <p>#204,Brintha Appartment, Lal Bagwal Street,Naval Nagar, Mumbai, India.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-lg-3">
                        <div>
                            <h2>Get to Know us</h2>
                            <p></p>
                            <ul class="list-unstyled">
                                <li class="py-1">About Us</li>
                                <li class="py-1">Career</li>
                                <li class="py-1">Press Releases</li>
                                <li class="py-1">Gift a smile</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-lg-3">
                        <div>
                            <h2>Contact with us</h2>
                            <ul class="list-unstyled">
                                <li class="py-1">Facebook</li>
                                <li class="py-1">Twitter</li>
                                <li class="py-1">Instagram</li>
                                <li class="py-1">Contact : 555-666-7788</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-lg-3">
                        <div>
                            <h2>Let Us Help You</h2>
                            <ul class="list-unstyled">
                                <li class="py-1">100% Purchase Protection</li>
                                <li class="py-1">Your Account</li>
                                <li class="py-1">Return Centre</li>
                                <li class="py-1">Help</li>
                            </ul>
                        </div>
                    </div>
                    <hr class="Cus-Line"/>
                        <div class="col-12 pt-2">
                            <p class="text-center">Company Name Biker.Spot Created By 2023</p>
                        </div>
                </div>
            </div>
            <footer className="text-white">
                <p><i>
                    <FontAwesomeIcon icon={faFacebook} beatFade className="facebook" />
                    <FontAwesomeIcon icon={faTwitter} beatFade className="twitter" />
                    <FontAwesomeIcon icon={faYoutube} beatFade className="youtube" />
                </i> @BhArAtHiRaJa.is.coding</p>
            </footer>
        </>
    );
}