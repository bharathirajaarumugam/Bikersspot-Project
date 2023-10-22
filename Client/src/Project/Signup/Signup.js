import React from "react"
import { Menu } from "../Menu/Menu";
import axios from 'axios';
import '../Navbar/Navbar.css'
import '../Signup/Signup.css';
export function Signup() {

    function handleregister(event) {
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
        <Menu/>
            <div className="p-5 justify-content-center align-items-center" >
                <div className="pt-5 pb-4 d-flex justify-content-center align-items-center vh-80">

                    <div className="p-5 rounded bg-white justify-content-center align-items-center">

                        <form class="form" onSubmit={handleregister}>
                            <p class="title">Register </p>
                            <p class="message">Signup now and get full access to our app. </p>
                            <div class="flex">
                                <label for="fname">
                                    <input class="input" type="text" id="fname"/>
                                    <span>Firstname</span>
                                </label>

                                <label for="lname">
                                    <input class="input" type="text" id="lname"/>
                                    <span>Lastname</span>
                                </label>
                            </div>
                            <label for="email">
                                <input class="input" type="text" id="phone"/>
                                <span>Phone Number</span>
                            </label>
                            <label for="email">
                                <input class="input" type="email" id="email"/>
                                <span>Email</span>
                            </label>

                            <label for="password">
                                <input class="input" type="password" id="password"/>
                                <span>Password</span>
                            </label>

                            <label for="gender">
                                <input class="input" type="text" placeholder="" id="gender"/>
                                <span>Gender</span>
                            </label>
                            <label for="role">
                                <select id="role">
                                    <option >Select Roll</option>
                                    <option value="User"> User</option>
                                    <option value="Admin"> Admin</option>
                                </select>
                            </label>
                            <button class="submit">Submit</button>
                            <p class="signin">Already have an acount ? <a href="/Signin">Signin</a> </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}