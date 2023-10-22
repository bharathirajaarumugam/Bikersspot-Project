import React from "react"
import { Link } from "react-router-dom";
import '../Navbar/Navbar.css';
import axios from "axios";
import { Menu } from "../Menu/Menu";

export function Signin() {
    function handleLogin(event) {
        event.preventDefault()

        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        var logindetails = {
            email: email,
            password: password
        }
        if (email === "") {
            alert("Enter the email")
        }
        else if (password === "") {
            alert("Enter the password")
        }
        else {
            axios.post("http://localhost:3005/login", logindetails)
                .then((res) => {
                    if (res.data.status === "success") {
                        var role = res.data.role
                        var id = res.data.id
                        if (role === "Admin") {
                            window.location.href = `/Admin/${id}`
                        }
                        else if (role === "User") {
                            window.location.href = `/User/${id}`
                        }
                    }
                    else if (res.data.status === "invalid") {
                        alert("Your Password Invalid")
                    }
                    else if (res.data.status === "empty_set") {
                        alert("Your Username or Password Invalid")
                    }
                    else if (res.data.status === "error") {
                        alert("Contact Admin!")
                    }
                })
        }
    }

    return (
        <>
            <Menu />
            <div className="login-template d-flex justify-content-center align-items-center vh-100">
                <div className="form_container p-5 rounded bg-white">
                    <form onSubmit={handleLogin}>
                        <h3 className="text-center">Login</h3>
                        <div className="mb-2">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter a Mail" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <label for="password">Password</label>
                            <input type="password" id="password" placeholder="Enter a Password" className="form-control" />
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                            <label for="check">Remember Me</label>
                        </div>
                        <div className="d-grid mt-2">
                            <input type="Submit" value="Sigin" className="btn btn-primary" />
                        </div>
                        <div>
                            <p className="text-end mt-2">
                                <b>Forgot</b><a href="" className="m-2">Password?</a><Link to="/Signup" className="m-2">Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}