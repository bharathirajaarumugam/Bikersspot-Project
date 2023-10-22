import React from "react"
import { Link } from "react-router-dom";
// import '../Navbar/Navbar.css';
import axios from "axios";
import { Menu } from "../Menu/Menu";
import './Login.css';

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

            <div className="p-5 justify-content-center align-items-center" >
                <div className="pt-5 pb-4 d-flex justify-content-center align-items-center vh-100">

                    <div className="p-5 rounded bg-white justify-content-center align-items-center">
                        <div id="form-ui">
                            <form action="" method="post" id="form" onSubmit={handleLogin}>
                                <div id="form-body">
                                    <div id="welcome-lines">
                                        <div id="welcome-line-1">Login</div>
                                        <div id="welcome-line-2">Welcome User & Admin</div>
                                    </div>
                                    <div id="input-area">
                                        <div class="form-inp">
                                            <input type="text" id="email" placeholder="Enter a Email Address"/>
                                        </div>
                                        <div class="form-inp">
                                            <input type="password" id="password" placeholder="Enter a Password"/>
                                        </div>
                                    </div><br/>
                                    <label class="cyberpunk-checkbox-label">
                                        <input type="checkbox" class="cyberpunk-checkbox" id="check"/>Remember me
                                    </label>
                                    <div id="submit-button-cvr">
                                        <button id="submit-button" type="submit">Login</button>
                                    </div>
                                    <div id="forgot-pass">
                                        <a href="#">Forgot password?</a><Link to="/Signup" className="m-2">Signup</Link>
                                    </div>
                                    <div id="bar"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}