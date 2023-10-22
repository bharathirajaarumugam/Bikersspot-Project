import React from "react";
import '../Availableservice/Service.css'
import { Link } from "react-router-dom";
export function Userbookstatus(){
    return(
        <>
        <div>
            <h1 className="text-center text-white m-5">User <span className="text-warning">Book </span>Status</h1>
        </div>

        <div class="container ">
        <div class="row ">
            <div class=" row  col-sm-6 p-4">
                <div class="card text-bg-dark"><br/><br/>
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX11325504.jpg"
                        class="card-img" alt="..."/>
                    <div class="card-img-overlay">
                        <h2 class="card-title text-warning">Service Book</h2>
                        
                    </div>
                    <h2 class="card-title text-warning">View Book Service Status</h2>
                </div>
                <Link to="/Userservicestatus/"><button className="admin_button shadow__btn bg-success mt-3 ms-5 w-25 text-white border-0 rounded"><b>View Service Book</b></button></Link>

            </div>
            <div class=" row col-sm-6 p-4">
                <div class="card text-bg-dark"><br/><br/>
                    <img src="https://th.bing.com/th/id/OIP.cyKnZR9SVUarUUFgMJUUFQAAAA?pid=ImgDet&w=300&h=300&rs=1"
                        class="card-img" alt="..."/>
                    <div class="card-img-overlay">
                        
                        <h2 class="card-text text-warning">Product Book</h2>
                    </div><br/>
                    <h2 class="card-title text-warning">Bike Book Product Service</h2>
                </div>
                <Link to="/Userproductstatus/"><button className="admin_button shadow__btn bg-success mt-3 ms-5 w-25 text-white border-0 rounded"><b>View Product Book</b></button></Link>
            </div>
        </div>
        <button type="button" class="btn btn-primary vr-button">View All Service & Products</button><br/>
    </div>
        </>
    )
}
// padding-top: 55%;
// border: 2px solid white;
// float: right; width: 90px;