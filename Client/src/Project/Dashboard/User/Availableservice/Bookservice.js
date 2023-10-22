import React from "react";
import '../Availableservice/Service.css'
import { Link } from "react-router-dom";
import axios from "axios";
export function Bookservice() {

    function userbookservice(event) {
        event.preventDefault()

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var contact = document.getElementById("contact").value;
        var pickup = document.getElementById("pickup").value;
        var address = document.getElementById("address").value;
        var bikemodel = document.getElementById("bikemodel").value;
        var service = document.getElementById("service").value;
        var bookstatus = document.getElementById("bookstatus").value;
        var paymentstatus = document.getElementById("paymentstatus").value;

        var bookdetails = {
            name: name,
            email: email,
            contact: contact,
            pickup: pickup,
            address: address,
            bikemodel: bikemodel,
            bookstatus: bookstatus,
            paymentstatus: paymentstatus,
            service: service
        }
        if (name === '') {
            alert("Enter The Service Fields")
        }
        else {
            axios.post("http://localhost:3005/addbookservice", bookdetails)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Service Are Not Inserted")
                    } else if (res.data.status === "success") {
                        alert("Book Service Successfully")
                        window.location.reload();
                    }
                })
        }
    }

    return (
        <>
            <section>
                <h1 className="text-center text-warning">Book Service</h1>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://c4.wallpaperflare.com/wallpaper/583/313/84/8k-ducati-xdiavel-s-2018-bikes-wallpaper-preview.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Hign Performance Services</h5>
                                <p>Keep a list ready of all the things you need to get rectified in the service.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://c4.wallpaperflare.com/wallpaper/176/498/389/bike-gsx-gsx1300r-hayabusa-wallpaper-preview.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Efficiently and Better Performance</h5>
                                <p>Make a prior appointment with the service centre.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://c4.wallpaperflare.com/wallpaper/93/108/882/garage-motorcycle-sport-yamaha-bike-hd-wallpaper-preview.jpg" class="d-block w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Tool kit provided in your vehicle</h5>
                                <p> Take your bike to the service centre as early as possible.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <div className="p-5 justify-content-center align-items-center" >
                <div className="pt-5 pb-4 d-flex justify-content-center align-items-center vh-80">

                    <div className="p-5 rounded bg-white justify-content-center align-items-center">

                        <form class="form" onSubmit={userbookservice}>
                            <p class="title">Book A Service </p>
                            <p class="message">Book a Service and team will contact you quickly.<span className="text-info">("Thanks for choosing") </span></p>
                                <label for="name">
                                    <input class="input" type="text" id="name"/>
                                    <span>Name</span>
                                </label>
                            <label for="email">
                                <input class="input" type="email" id="email"/>
                                <span>Email</span>
                            </label>
                            <label for="contact">
                                <input class="input" type="phone" id="contact"/>
                                <span>Contact Number</span>
                            </label>
                            <label for="pickup">
                                <input class="input" type="date" id="pickup"/>
                                <span>Pickup Date</span>
                            </label>
                            <label for="address">
                                <textarea class="input" type="text" id="address"/>
                                <span>Address</span>
                            </label>
                            <label for="bikemodel">
                                <input class="input" type="text" id="bikemodel"/>
                                <span>Bike Model</span>
                            </label>
                            <label for="service">
                                <select id="service">
                                    <option >Select Service</option>
                                    <option value="General Service">General Service</option>
                                    <option value="Repair Service">Repair Service</option>
                                </select>
                            </label>
                            <label for="bookstatus">
                                <input class="input" type="text" id="bookstatus"/>
                                <span>Book Status</span>
                            </label>
                            <label for="paymentstatus">
                                <input class="input" type="text" id="paymentstatus"/>
                                <span>Payment Status</span>
                            </label>
                            <button class="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <section>
                <div class="container-fluid">
                    <div class="div-bg bg-white">
                        <div class="d-flex flex-column justify-content-center min-vh-100">
                            <div>
                                <h1 class="heading Cus-Title mb-5 text-center">Let us Join Together Book Service</h1>
                                <div class="d-flex justify-content-center">
                                    <Link to='/Userbookstatus'><button type="button" className="btn btn-book btn-outline-warning py-2 fs-4">BOOK STATUS</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container ">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <div><br />
                                <h1 class="fw-bold text-center text-white">Our Services</h1>
                                <p className="text-white">
                                    Maintaining bikes is considered to be tedious and difficult by most people.
                                    Whether you own a car or a motorcycle, you will need to service and maintain
                                    it on a regular basis There are different parts of your bike that you need to
                                    tend to with special care to ensure your bikes consistent efficiency.
                                </p>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2 d-flex justify-content-center">
                            <div class="card m-5 p-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-delivery-img.png"
                                    class="card-img-top ms-4 w-75" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Fast and Free Delivery</h5>
                                    <p class="card-text">
                                        Fast, free and convenient delivery choices on millions of items.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mt-2 d-flex justify-content-center">
                            <div class="card m-5 p-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-money-back-img.png"
                                    class="card-img-top ms-4 w-75" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">100% Money back guarantee</h5>
                                    <p class="card-text">
                                        This is probably the most popular gurantee in the world.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-3 d-flex justify-content-center">
                            <div class="card m-5 p-3">
                                <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-services-24-by-7-support-img.png"
                                    class="card-img-top ms-4 w-75" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fw-bold">Online Support 24/7</h5>
                                    <p class="card-text">
                                        Our Online support will provide you with many useful functions,
                                        valuable information, tips.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container-fluid mt-5">
                    <h1 className="text-center text-white">Service Testimonials</h1><br />
                    <div class="row g-2">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="card-cell text-bg-dark  ">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJc0S1dDdKRYRlUEOiel_Exgpdadti4fEmqA&usqp=CAU"
                                    class="card-img " alt="..." />
                            </div>
                        </div>
                        <div class="col-sm-12  col-md-6 col-lg-6">
                            <div class="card-cell text-bg-dark">
                                <img src="https://www.apnamechanic.com/wp-content/uploads/2023/05/bike-service-at-home.jpg"
                                    class="card-img" alt="..." />
                            </div>
                        </div>
                        <div class="col-sm-12  col-md-6 col-lg-6">
                            <div class="card-cell text-bg-dark">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPDmx0jsKpagjAoaYvo0NDwBh-uJBsuwdci_PaXHeBG5nvEkVSIPGoPjgHBFQLcvfAdo&usqp=CAU"
                                    class="card-img" alt="..." />
                            </div>
                        </div>
                        <div class="col-sm-12  col-md-6 col-lg-6">
                            <div class="card-cell text-bg-dark">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPYtCtV995-RF0lXyZMUuB2YTXMrvRdCHigQ&usqp=CAU"
                                    class="card-img" alt="..." />
                            </div>
                        </div>
                    </div>
                    <h5 class="Two mt-5 text-warning text-center">See All Offers<i class="bi bi-arrow-right-short"></i></h5>
                </div>
            </section>
        </>
    )
}