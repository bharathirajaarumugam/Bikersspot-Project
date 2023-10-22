import React from "react";
import '../Availableservice/Service.css'
import { Link } from "react-router-dom";
export function Availableservice() {
    return (
        <>
            <div class="container-fluid">
                <h1 className="text-white text-center" >Booking For Service</h1>
                <div className="text-white">
                    <p>Bikers Spot is the leading provider of bike servicing in Chennai, and we're proud to offer some of the best deals around. Our services are designed to keep your bike running smoothly, and we offer a variety of packages to suit your needs. Whether you're looking for a basic service or a complete overhaul, we've got you covered. And our prices are unbeatable - you won't find better deals anywhere else. So what are you waiting for? Grab a deal now and enjoy the peace of mind that comes with knowing your bike is in good hands.</p>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="https://t4.ftcdn.net/jpg/06/55/17/91/240_F_655179150_1oyAoMkqPGy5Cxt25znIb9TorHpvwHes.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h1 class="card-title">Bike General Service</h1>
                                    <p class="card-text">Start a Multi-brand Two Wheeler Service Workshop Franchise Today!.Apna Mechanic is offering a Multi-Brand Bike Garage franchise Opportunity in India<span>$999</span> Full Payment</p>
                                    <Link to='/Bookservice'><button type="button" className="btn btn-outline-primary">Book a Service</button></Link>
                                </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://t3.ftcdn.net/jpg/02/36/55/46/240_F_236554619_yTTi5lBht8ekTK2X7G3TVcehxEjuoETd.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h1 class="card-title">Bike Repair Service</h1>
                                    <p class="card-text">Helping you connect to the right service centers
                                        additional content. This content is a little bit longer and Join the premium network of two-wheeler workshops and be your own boss! <span>$499</span> Advance</p>
                                    <Link to='/Bookservice'><button type="button" className="btn btn-outline-primary">Book a Service</button></Link>
                                </div>
                        </div>
                    </div>
                </div><br/>
                <button type="button" class="btn btn-info">View All Service</button>
            </div>
        </>
    )
}