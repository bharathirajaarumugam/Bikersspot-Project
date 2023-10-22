import React from "react"
import { Link } from "react-router-dom";
import { Menu } from "../Menu/Menu";
import axios from 'axios';
import '../Navbar/Navbar.css'
export function Signup() {

    function handleregister(event){
        event.preventDefault()

        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var gender = document.getElementById("gender").value;
        var role = document.getElementById("role").value;   

        var userdetails = {
            fname: fname,
            lname: lname,
            phone: phone,
            email: email,
            password: password,
            gender: gender,
            role: role
        }
        if (fname === '') {
            alert("Enter The Fields")
        }
        else {
            axios.post("http://localhost:3005/register", userdetails)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data Are Not Inserted")
                    } else if (res.data.status === "success") {
                        alert("Registration Successfully")
                    }
                })
        }
    }
    return (
        <>
        <Menu />
            <div className="signup-template p-5 d-flex justify-content-center align-items-center vh-100 bg-primary">
                <div className="form_container p-5 rounded bg-white">
                    <form onSubmit={handleregister}>
                        <h3 className="text-center">Sign Up</h3>
                        <div className="mb-2">
                            <label for="fname">First Name</label>
                            <input type="text" placeholder="Enter First Name" id="fname" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label for="lname">Last Name</label>
                            <input type="text" placeholder="Enter Last Name" id="lname" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label for="phone">Phone Number</label>
                            <input type="tel" placeholder="Enter Phone Number" id="phone" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label for="email">Email</label>
                            <input type="email" placeholder="Enter a Mail" id="email" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label for="password">Password</label>
                            <input type="password" placeholder="Enter a Password" id="password" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label for="gender">Gender</label>
                            <input type="text" placeholder="Enter a Gender" id="gender" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label for="role">Role :</label>
                            <select id="role" className="mx-3">
                                <option >Select Roll</option>
                                <option value="User" className="opt1">User</option>
                                <option value="Admin" className="opt2">Admin</option>
                                <option value="Client" className="opt3">Client</option>
                            </select>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <div>
                            <p className="text-end mt-2">
                                <b>Already Have an Account?</b><Link to="/Signin" className="m-2"><b>Signin</b></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}