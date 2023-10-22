import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './UpdateService.css'
export function Adminproduct() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getallproduct")
            .then(res => res.json())
            .then(details => setProduct(details))
    })
    function handledelete(productname) {
        alert(productname)
        let deletedata = { productname: productname }
        axios.post("http://localhost:3005/adminproductdelete", deletedata)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data are deleted")
                }
            })
    }
    return (
        <>
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
                                            <Link to={`/Updateproduct/${value.productname}`} className="btn btn-success">Update</Link>
                                            <a href="#" class="btn btn-danger rounded border-0 ms-5" onClick={() => { handledelete(value.productname) }}>Remove</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>

                    ))
                }
            </div>


        </>
    );
}