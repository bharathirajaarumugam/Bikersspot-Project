import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Useravailableproduct(){
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getallproduct")
            .then(res => res.json())
            .then(details => setProduct(details))
    })

    function confirm() {
        alert("order placed successfully")
    }
    return(
        <>
        <h1 className="text-center text-primary">UserAvailable Products</h1>
        <div class="container d-flex"><br />
                <h2 class="title">Discover the Best Bike Parts</h2>
                {
                    product.map((value, index) => (
                        <>

                            <div class="row row-cols-1 row-cols-md-3 g-4 d-flex">
                                <div class="col">
                                    <div class="card h-100">
                                        <img src={value.productimage} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h3 className="Product-name">{value.productname}</h3>
                                            <h5>ProductPrice:<span className="text-warning">{value.productprice}</span></h5>
                                            <h5>ProductQuantity:<span className="text-warning">{value.quantity}</span></h5>
                                            <h5>ProductRating:<span className="text-warning">{value.rating}</span></h5>
                                            <button onClick={confirm} className="btn btn-info" id="confirm">Buy Product</button>
                                            <Link to="/UserBookorder" className="btn btn-success rounded border-0 ms-5">Book Delivery</Link>                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))
                }
            </div>
        </>
    )
}