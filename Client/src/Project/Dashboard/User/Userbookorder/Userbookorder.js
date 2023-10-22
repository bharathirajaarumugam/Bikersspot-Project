import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import '../Userbookorder/bookorder.css'
export function UserBookorder() {
    function bookorder(event) {
        event.preventDefault()
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;

        let contact = document.getElementById("contact").value;
        let bookinfo = {
            email: email,
            address: address,
            contact: contact
        }
        if (email === '' && address === '' && contact === '') {
            alert("enter all details")

        } else {
            axios.post("http://localhost:3005/addbookorder", bookinfo)
                .then(res => {
                    if (res.data.status === "error") {
                        alert("order unsuccessful")
                    }
                    else if (res.data.status === "success") {
                        alert("Ordered Successfully")
                        window.location.reload();

                    }
                })
        }
    }
    return (
        <>
            <br/>
            <u className="text-warning"><h1 className="text-warning text-center"><span>B</span>ook <span>O</span>rder</h1><br/></u>
            <div class="newsletter-form">
                <p class="heading"> Booking to Delivery Product Quick & safe</p>
                <form class="form" onSubmit={bookorder}>
                    <label for="email">Email:</label>
                    <input placeholder="Enter your Email" name="email" id="email" type="email"/>
                    <label for="address">Adderss:</label>
                    <textarea placeholder=" Enter your Address" name="address" id="address" type="text"/>
                    <label for="contact">Contact:</label>
                    <input placeholder="Enter your Contact" name="contact" id="contact" type="phone"/><br/>
                    <input value="Book Order" type="submit"/>
                </form>
            </div>
        </>
    );
}