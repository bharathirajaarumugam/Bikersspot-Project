import React from "react";

// import '../User/Profile.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faSnapchat, faTelegram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

export function Profile() {

    return(
        <>
            <header class="header">
                <div class="header__content">
                    <div class="header__logo-container">
                        <div class="header__logo-img-cont">
                            <img
                                src="https://c4.wallpaperflare.com/wallpaper/449/353/223/lionel-messi-4k-wallpaper-preview.jpg"
                                alt="Bharathi Logo Image"
                                class="header__logo-img"
                            />
                        </div>
                        <span class="header__logo-sub">
                            BHARATHIRAJA
                        </span>
                    </div>
                    <div class="header__main">
                        <ul class="header__links">
                            <li class="header__link-wrapper">
                                <a href="#" class="header__link"> Home </a>
                            </li>
                            <li class="header__link-wrapper">
                                <a href="#about" class="header__link">About </a>
                            </li>
                            <li class="header__link-wrapper">
                                <a href="#projects" class="header__link">
                                    Projects
                                </a>
                            </li>
                            <li class="header__link-wrapper">
                                <a href="#contact" class="header__link"> Contact </a>
                            </li>
                        </ul>
                        <div class="header__main-ham-menu-cont">
                            <img
                                src="./assets/svg/ham-menu.svg"
                                alt="hamburger menu"
                                class="header__main-ham-menu"
                            />
                            <img
                                src="./assets/svg/ham-menu-close.svg"
                                alt="hamburger menu close"
                                class="header__main-ham-menu-close d-none"
                            />
                        </div>
                    </div>
                </div>
                <div class="header__sm-menu">
                    <div class="header__sm-menu-content">
                        <ul class="header__sm-menu-links">
                            <li class="header__sm-menu-link">
                                <a href="./index.html"> Home </a>
                            </li>

                            <li class="header__sm-menu-link">
                                <a href="./index.html#about"> About </a>
                            </li>

                            <li class="header__sm-menu-link">
                                <a href="./index.html#projects"> Projects </a>
                            </li>

                            <li class="header__sm-menu-link">
                                <a href="./index.html#contact"> Contact </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <section class="home-hero">
                <div class="home-hero__content">
                    <h1 class="heading-primary">Hey, My name is Bharathiraja</h1>
                    <div class="home-hero__info">
                        <p class="text-primary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                            tempora explicabo quae quod deserunt eius sapiente solutions for
                            complex problems
                        </p>
                    </div>
                    <div class="home-hero__cta">
                        <a href="./#projects" class="btn btn--bg">Projects</a>
                    </div>
                </div>
                <div class="home-hero__socials">
                    <div class="home-hero__social">
                        <a href="#" class="home-hero__social-icon-link facebook">
                        <FontAwesomeIcon icon={faFacebook} beatFade />
                        </a>
                    </div>
                    <div class="home-hero__social">
                        <a href="#" class="home-hero__social-icon-link whatsapp">
                        <FontAwesomeIcon icon={faWhatsapp} beatFade />
                        </a>
                    </div>
                    <div class="home-hero__social">
                        <a href="#" class="home-hero__social-icon-link instagram">
                        <FontAwesomeIcon icon={faInstagram} beatFade />
                        </a>
                    </div>
                    <div class="home-hero__social">
                        <a href="#" class="home-hero__social-icon-link youtube">
                        <FontAwesomeIcon icon={faYoutube} beatFade />
                        </a>
                    </div>
                    <div class="home-hero__social">
                        <a
                            href="#"
                            class="home-hero__social-icon-link home-hero__social-icon-link--bd-none github">
                            <FontAwesomeIcon icon={faGithub} beatFade />
                        </a>
                    </div>
                </div>
                <div class="home-hero__mouse-scroll-cont">
                    <div class="mouse"></div>
                </div>
            </section>
            <section  class="about sec-pad">
                <div id="about" class="main-container">
                    <h2 class="heading heading-sec heading-sec__mb-med">
                        <span class="heading-sec__main">About Me</span>
                        <span class="heading-sec__sub">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                            tempora explicabo quae quod deserunt eius sapiente
                        </span>
                    </h2>
                    <div class="about__content">
                        <div class="about__content-main">
                            <h3 class="about__content-title">Get to know me!</h3>
                            <div class="about__content-details">
                                <p class="about__content-details-para">
                                    Hey! It's
                                    <strong>John Doe</strong>
                                    and I'm a <strong> Frontend Web Developer </strong> located in
                                    Los Angeles. I've done
                                    <strong> remote </strong>
                                    projects for agencies, consulted for startups, and collaborated
                                    with talented people to create
                                    <strong>digital products </strong>
                                    for both business and consumer use.
                                </p>
                                <p class="about__content-details-para">
                                    I'm a bit of a digital product junky. Over the years, I've used
                                    hundreds of web and mobile apps in different industries and
                                    verticals. Feel free to
                                    <strong>contact</strong> me here.
                                </p>
                            </div>
                            <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
                            >Contact</a
                            >
                        </div>
                        <div class="about__content-skills">
                            <h3 class="about__content-title">My Skills</h3>
                            <div class="skills">
                                <div class="skills__skill">HTML</div>
                                <div class="skills__skill">CSS</div>
                                <div class="skills__skill">JavaScript</div>
                                <div class="skills__skill">React</div>
                                <div class="skills__skill">SASS</div>
                                <div class="skills__skill">GIT</div>
                                <div class="skills__skill">Shopify</div>
                                <div class="skills__skill">Wordpress</div>
                                <div class="skills__skill">Google ADS</div>
                                <div class="skills__skill">Facebook Ads</div>
                                <div class="skills__skill">Android</div>
                                <div class="skills__skill">IOS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects" class="projects sec-pad">
                <div class="main-container">
                    <h2 class="heading heading-sec heading-sec__mb-bg">
                        <span class="heading-sec__main">Projects</span>
                        <span class="heading-sec__sub">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                            tempora explicabo quae quod deserunt eius sapiente
                        </span>
                    </h2>

                    <div class="projects__content">
                        <div class="projects__row">
                            <div class="projects__row-img-cont">
                                <img
                                    src="https://c4.wallpaperflare.com/wallpaper/222/410/453/comics-ghost-rider-bike-chain-fire-hd-wallpaper-preview.jpg"
                                    alt="Software Screenshot"
                                    class="projects__row-img"
                                    loading="lazy"
                                />
                            </div>
                            <div class="projects__row-content">
                                <h3 class="projects__row-content-title">Project 1</h3>
                                <p class="projects__row-content-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                    facilis tempora, explicabo quae quod deserunt eius sapiente
                                    praesentium.
                                </p>
                                <a
                                    href="./project-1.html"
                                    class="btn btn--med btn--theme dynamicBgClr"
                                    target="_blank"
                                >Case Study</a
                                >
                            </div>
                        </div>
                        <div class="projects__row">
                            <div class="projects__row-img-cont">
                                <img
                                    src="https://c4.wallpaperflare.com/wallpaper/346/610/516/motorcycle-kawasaki-kawasaki-ninja-h2r-wallpaper-preview.jpg"
                                    alt="Software Screenshot"
                                    class="projects__row-img"
                                    loading="lazy"
                                />
                            </div>
                            <div class="projects__row-content">
                                <h3 class="projects__row-content-title">Project 2</h3>
                                <p class="projects__row-content-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                    facilis tempora, explicabo quae quod deserunt eius sapiente
                                    praesentium.
                                </p>
                                <a
                                    href="./project-2.html"
                                    class="btn btn--med btn--theme dynamicBgClr"
                                    target="_blank"
                                >Case Study</a
                                >
                            </div>
                        </div>
                        <div class="projects__row">
                            <div class="projects__row-img-cont">
                                <img
                                    src="https://c4.wallpaperflare.com/wallpaper/295/264/47/ktm-bikes-racing-hd-wallpaper-preview.jpg"
                                    alt="Software Screenshot"
                                    class="projects__row-img"
                                    loading="lazy"
                                />
                            </div>
                            <div class="projects__row-content">
                                <h3 class="projects__row-content-title">Project 3</h3>
                                <p class="projects__row-content-desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                                    facilis tempora, explicabo quae quod deserunt eius sapiente
                                    praesentium.
                                </p>
                                <a
                                    href="./project-3.html"
                                    class="btn btn--med btn--theme dynamicBgClr"
                                    target="_blank"
                                >Case Study</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" class="contact sec-pad dynamicBg">
                <div class="main-container">
                    <h2 class="heading heading-sec heading-sec__mb-med">
                        <span class="heading-sec__main heading-sec__main--lt">Contact</span>
                        <span class="heading-sec__sub heading-sec__sub--lt">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
                            tempora explicabo quae quod deserunt eius sapiente
                        </span>
                    </h2>
                    <div class="contact__form-container">
                        <form action="#" class="contact__form">
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="name">Name</label>
                                <input
                                    required
                                    placeholder="Enter Your Name"
                                    type="text"
                                    class="contact__form-input"
                                    name="name"
                                    id="name"
                                />
                            </div>
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="email">Email</label>
                                <input
                                    required
                                    placeholder="Enter Your Email"
                                    type="text"
                                    class="contact__form-input"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div class="contact__form-field">
                                <label class="contact__form-label" for="message">Message</label>
                                <textarea
                                    required
                                    cols="30"
                                    rows="10"
                                    class="contact__form-input"
                                    placeholder="Enter Your Message"
                                    name="message"
                                    id="message"
                                ></textarea>
                            </div>
                            <button type="submit" class="btn btn--theme contact__btn">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <footer class="main-footer">
                <div class="main-container">
                    <div class="main-footer__upper">
                        <div class="main-footer__row main-footer__row-1">
                            <h2 class="heading heading-sm main-footer__heading-sm">
                                <span>Social</span>
                            </h2>
                            <div class="main-footer__social-cont">
                                <a target="_blank" rel="noreferrer" href="#" class="main-footer__icon linkedin">
                                <FontAwesomeIcon icon={faLinkedin} beatFade />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#" class="main-footer__icon snapchat">
                                <FontAwesomeIcon icon={faSnapchat} beatFade />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#" class="main-footer__icon twiter">
                                <FontAwesomeIcon icon={faTwitter} beatFade />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#" class="main-footer__icon telegram">
                                <FontAwesomeIcon icon={faTelegram} beatFade />
                                </a>
                                <a target="_blank" rel="noreferrer" href="#" className="facebook">
                                <FontAwesomeIcon icon={faFacebook} beatFade />
                                </a>
                            </div>
                        </div>
                        <div class="main-footer__row main-footer__row-2">
                            <h4 class="heading heading-sm text-lt">Bharathiraja</h4>
                            <p class="main-footer__short-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
                                tempora explicabo quae quod deserunt
                            </p>
                        </div>
                    </div>

                    {/* <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) --> */}
                    <div class="main-footer__lower">
                        &copy; Copyright 2023. Made by
                        <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com">BHARATHIRAJA</a>
                    </div>
                </div>
            </footer>
        </>
    );
}