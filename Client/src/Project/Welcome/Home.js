import React from "react";
import { Menu } from "../Menu/Menu";
import '../Welcome/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faSnapchat, faTelegram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
// import bike from '../Navbar/S 5251 L copy.jpg';
export function Home() {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
    return (
        <>
            <Menu />
            <header>
                <a href="#" className="logo" src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.2.509566073.1686739486&semt=sph" alt="" />
            </header>

            <div class="landing" id="home">
                <div className="about-me text-white">
                    <h1>Welcome All &#128075; </h1>
                    <h3>Helping you connect to the right dealers</h3>
                    <p>
                    Many Two-Wheeler owners wont be aware of the particulars of bike servicing and
                    maintenance and may wonder if the mechanic was right in suggesting to replace 
                    some parts at particular usage. For new bikes, owner manuals are provided in 
                    which all details of the bike, maintenance schedules etc. are given. However, 
                    most of the time people would read it interestingly for half an hour or so and leave it 
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
                <img class="profile-pic" src="https://i.pinimg.com/236x/9d/3f/63/9d3f63eeb72dca19988c546e68abad46.jpg" alt="" />
            </div>
            <div class="container-fluid">
                <div class="image-back"><br />
                    <div class=" End d-flex justify-content-center pt-5 m-5 mr-5">
                        <h1 class="images-head text-black text-center pt-5 pl-5"> Welcome to Our Bikers.Spot Website</h1>
                    </div>
                    <h1 class="images-head text-black text-center pt-5 pl-5"> Need Any Suggession for Bike Service</h1>
                    <div class=" End d-flex justify-content-center pt-5">
                        <button class=" text-white text-center bg-dark m-5 images-heads">View More</button>
                    </div>
                </div>
            </div>
            <div className="head-one text-white">
                <br /><h1>About Us</h1>
                <h2>A professional’s guide to bike servicing</h2>
            </div>
            <div class="skills-section" id="about">
                <div class="skill-card bg-white">
                    <h2>Strong Bike</h2>
                    <img className="imgone" class="rotate" src="https://i.pinimg.com/236x/49/f6/97/49f69748e657ce6271a311d6f585309a.jpg" alt="" />
                    <ul><br />
                        <h2>Bullot Bike</h2>
                        <li>Royal Enfield’s appeal continues to hinge ability</li>
                        <li>Over the past decade, mid-displacement motorcycle</li>
                        <li>Royal Enfield filled gaps</li>
                    </ul>
                </div>
                <div class="skill-card bg-white">
                    <h2>KTM Bike</h2>
                    <img className="imgtwo" class="rotate" src="https://i.pinimg.com/236x/f7/fd/9c/f7fd9cdfbc1f12f8af3f318f38f96809.jpg" alt="" />
                    <ul className="ulone">
                        <br /><br />
                        <h2>Scooty Bike</h2>
                        <li> Priced the same as its predecessor</li>
                        <li> Gets comprehensive updates in every area</li>
                        <li>Power and torque are marginally higher </li>
                    </ul>
                </div>
                <div class="skill-card bg-white">
                    <h2>Style Bike</h2>
                    <img className="img-three" class="rotate" src="https://i.pinimg.com/236x/11/a8/1b/11a81b04c1a237bb04fcbea9b1a176e8.jpg" alt="" />
                    <ul><br />
                        <h2>Strong Bike</h2>
                        <li>The word ‘Scooty’ did sit well with the Indian folks.</li>
                        <li>Ever since it was released, all scooters</li>
                        <li>The Scooty has stood the test of time</li>
                    </ul>
                </div>
            </div>
            <div class="project-section" id="service">
                <h1 className="head-one text-white">What Service Provide?</h1>
                <div class="project-card bg-white">
                    <h1>
                        Bike Fork Service
                        <a href="https://github.com/bharathirajaarumugam">
                            <FontAwesomeIcon icon={faGithub} beatFade className="gitone" />
                        </a>
                    </h1>
                    <img className="imgtwo" class="rotate" src="https://i.pinimg.com/236x/42/03/16/4203162fd75facfcab73fdc4702d04d8.jpg" alt="" />

                    <p>
                        The primary service that a service centre provides is regularly scheduled
                        maintenance/servicing for your bike. Apart from that,
                        replacement of worn out parts and repairs in case of accidental damage.
                    </p>
                </div>
                <div class="project-card bg-white">
                    <h1>
                        Bike Frame Service
                        <a href="https://www.instagram.com/bharathiraja661?igshid=YTQwZjQ0NmI0OA%3D%3D">
                            <FontAwesomeIcon icon={faInstagram} beatFade className="instaone" />
                        </a>
                    </h1>
                    <img className="imgtwo" class="rotate" src="https://i.pinimg.com/236x/21/ae/83/21ae83725da9c1271bf6005af7ac10e8.jpg" alt="" />

                    <p>
                        The first thing we must check after our bike is serviced is whether it has
                        been washed. A washed bike is easier to inspect for all the work that was
                        done on it.work done against was filed when the bike was handed over.
                    </p>
                </div>
                <div class="project-card bg-white">
                    <h1>Bike Wheel Service 
                        <a href="https://www.linkedin.com/in/bharathi-raja-21a402238/">
                        <FontAwesomeIcon icon={faLinkedin} beatFade className="linkedone" />
                        </a>
                    </h1>
                    <img className="imgtwo" class="rotate" src="https://i.pinimg.com/236x/97/84/c8/9784c8b48c7c5a496b4866c87d144cb7.jpg" alt="" />
                    <p>
                        Generally most scheduled services only take a few hours.
                        In most cases, this means dropping your bike off in the
                        morning and picking it up in the evening.
                    </p>
                </div>
            </div >
            <h1 className="text-center text-white" id="apps">My Apps</h1>
            <div class="iconscontainer">
                <div class="icons">
                    <div class="icon"><FontAwesomeIcon icon={faFacebook} beatFade className="facebok bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faWhatsapp} beatFade className="whatsapp bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faInstagram} beatFade className="instagram bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faYoutube} beatFade className="youtube bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faTwitter} beatFade className="twiter bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faSnapchat} beatFade className="snapchat bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faGithub} beatFade className="github bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faTelegram} beatFade className="telegram bi bi-facebook" /></div>
                    <div class="icon"><FontAwesomeIcon icon={faLinkedin} beatFade className="linkedin bi bi-facebook" /></div>
                </div>
            </div>
            <div id="contact" class="container-fluid text-white">
                <h1 className="text-center"><u>Contact Us</u></h1>
                <div class="row Cus-FooterBody p-5">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="row">
                            <div class="col-12 d-flex justify-content-center align-items-center">
                                <img class="w-50"
                                    src="https://i.pinimg.com/236x/9a/2c/6a/9a2c6a5ba07bf226f89ccced69c7fc4c.jpg"
                                    alt="flybuy-logo"/>
                            </div>
                            <div class="col-12 mt-4 d-sm-flex justify-content-sm-center">
                                <i class="fa-brands fa-google Cus-Icon fa-2x p-3 rounded-circle"></i>
                                <i class="fa-brands fa-twitter Cus-Icon fa-2x p-3 rounded-circle"></i>
                                <i class="fa-brands fa-instagram Cus-Icon fa-2x p-3 rounded-circle"></i>
                                <i class="fa-brands fa-linkedin Cus-Icon fa-2x p-3 rounded-circle"></i>
                            </div>
                            <div class="col-12 py-2">
                                <p>37, Ayur Vigyan Nagar, New Delhi, India.</p>
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
                                <li class="py-1">Contact : 565-135-1553</li>
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