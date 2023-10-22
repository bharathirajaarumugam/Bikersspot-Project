import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Updatedetails() {
    var { user_id } = useParams()
    const [first_name, setFname] = useState('')
    const [last_name, setLname] = useState('')
    const [phone_number, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [gender, setGender] = useState('')
    const [role, setRole] = useState('')

    useEffect(() => {
        fetch("http://localhost:3005/getone" + user_id)
            .then(data => data.json())
            .then((res) => {
                setFname(res[0].first_name)
                setLname(res[0].last_name)
                setPhone(res[0].phone_number)
                setEmail(res[0].email)
                setPassword(res[0].password)
                setGender(res[0].gender)
                setRole(res[0].role)
            })
    }, [])
    function handleupdate(event) {
        event.preventDefault()
        var first_name = document.getElementById("first_name").value
        var last_name = document.getElementById("last_name").value
        var phone_number = document.getElementById("phone_number").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        var gender = document.getElementById("gender").value
        var role = document.getElementById("role").value
        var updatedetails = {

            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            email: email,
            password: password,
            gender: gender,
            role: role
        }
        if (first_name === '') {
            alert("Enter the first name")
        }
        else {
            axios.put("http://localhost:3005/update/" + user_id, updatedetails)
                .then((response) => {
                    if (response.data.status === "error") {
                        alert("data are not updated")
                    }
                    else if(response.data.status === "success") {
                        alert("data are not updated!")
                    }
                })
        }
    }

    return (
        <>
            <div className="RegMainPage h-100 d-flex justify-content-center align-items-center row">
                <div className="regcard container d-flex flex-column align-items-center justify-content-center gap-3">

                    <h1 className="text-center">UPDATING USER DETAILS</h1>
                    <form onSubmit={handleupdate}>
                        <input type="text" id="first_name" placeholder="Enter the fname" value={first_name} onChange={(updatedata) => { setFname(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br />
                        <input type="text" id="last_name" placeholder="Enter the lname" value={last_name} onChange={(updatedata) => { setLname(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br />
                        <input type="text" id="phone_number" placeholder="Enter the phone" value={phone_number} onChange={(updatedata) => { setPhone(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br />
                        <input type="text" id="email" placeholder="Enter the email" value={email} onChange={(updatedata) => { setEmail(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br />
                        <input type="text" id="password" placeholder="Enter the password" value={password} onChange={(updatedata) => { setPassword(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br />
                        <input type="text" id="gender" placeholder="Enter the gender" value={gender} onChange={(updatedata) => { setGender(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br />
                        <select id="role" value={role} onChange={(updatedata) => { setRole(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0">
                            <option>select the Roll</option>
                            <option value="Admin">Admin</option>
                            <option value="Client">Client</option>
                            <option value="User">User</option>
                        </select><br /><br />
                        <button type="submit" className="btn btn-success btn-block rounded w-100 p-1 border-0">Register</button>
                    </form>
                </div>
            </div>
        </>
    );
} 