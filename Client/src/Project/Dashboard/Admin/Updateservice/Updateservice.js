import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '../Updateservice/UpdateService.css';

export function UpdateService() {
    function handleAdminproduct(event){
        event.preventDefault()
        let Product_ImageAdderss=document.getElementById("Product_ImageAdderss").value;
        let ProductName=document.getElementById("ProductName").value;
        let Price=document.getElementById("Price").value;
        let Quantity=document.getElementById("Quantity").value;
        let Rating=document.getElementById("Rating").value;

        var adminuser={
            productimage: Product_ImageAdderss,
            productname:ProductName,
            productprice:Price,
            quantity:Quantity,
            rating:Rating
        }
        if( Product_ImageAdderss === ''){
            alert("You should fill the product")
        }
        else{
            axios.post("http://localhost:3005/UpdateService",adminuser)
            .then(res=>{
                if(res.data.status === "error"){
                    alert("product are not inserted")
                }
                else if (res.data.status === "success"){
                    alert("product are insert")
                    window.location.href='/Adminproduct'
                }
            })
        }

    }
    return (
        <>
            <section class="vh-100 admin_bg">
                <div class="d-flex align-items-center h-100 ">
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div>
                                    <div>
                                        <h2 class="text-uppercase text-center text-white mb-5 ">Bike Parts Order</h2>
                                        <form  onSubmit={handleAdminproduct}>
                                            <div>
                                                <label className="text_color text-warning"><b>Bike - Image Adderss</b></label>
                                                <input type="text" id="Product_ImageAdderss" class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-warning"><b>Bike Model and product Name</b></label>
                                                <input type="text" id="ProductName" class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-warning"><b>Bike Part Price</b></label>
                                                <input type="text" id="Price" class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-warning"><b>Total Quantity</b></label>
                                                <input type="text" id="Quantity" class="form-control" />
                                            </div>
                                            <div>
                                                <label className="text_color text-warning"><b>Rating for Part</b></label>
                                                <input type="text" id="Rating" class="form-control" />
                                            </div>
                                           <button type="submit" className="admin_button bg-success mt-3 ms-5 w-25 text-white border-0 rounded"><b>Insert</b></button>
                                        <Link to="/Adminproduct/"><button className="admin_button bg-success mt-3 ms-5 w-25 text-white border-0 rounded"><b>Update</b></button></Link>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}