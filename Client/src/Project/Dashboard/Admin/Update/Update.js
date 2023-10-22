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
        fetch('http://localhost:3005/getone/' + user_id)
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

        var first_name = document.getElementById("fname").value
        var last_name = document.getElementById("lname").value
        var phone_number = document.getElementById("phone").value
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        var gender = document.getElementById("gender").value
        var role = document.getElementById("role").value
        
        let updatedetails = {
            first_name: first_name,
            last_name: last_name,
            phone_number: phone_number,
            email: email,
            password: password,
            gender: gender,
            role: role
        }
        if (first_name === '' || last_name === '' || phone_number === '' || email === '' || password === '') {
            alert("Field is not empty!")
        }
        else {
            axios.post('http://localhost:3005/update/'+user_id, updatedetails)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Data is not updated!")
                    }
                    else if (res.data.status === "success") {
                        alert("Data updated successfully!")
                        // window.location.href = '/view'
                    }
                })
        }
    }

    return (
        <>
            <section>
                <div className="bg-info">
                    <div className="RegMainPage h-100 d-flex justify-content-center align-items-center row">
                        <div className="regcard container d-flex flex-column align-items-center justify-content-center gap-3">
                            <div>
                            <h1 className="text-center">UPDATING USER DETAILS</h1>
                            </div>
                            <form onSubmit={handleupdate}>
                                <table>
                                    <tbody>
                                        <tr><td><input type="text" id="fname" placeholder="Enter the first name" value={first_name} onChange={(updatedata) => { setFname(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="lname" placeholder="Enter the last name" value={last_name} onChange={(updatedata) => { setLname(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="phone" placeholder="Enter the phone number" value={phone_number} onChange={(updatedata) => { setPhone(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="email" placeholder="Enter the email" value={email} onChange={(updatedata) => { setEmail(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="password" placeholder="Enter the password" value={password} onChange={(updatedata) => { setPassword(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="gender" placeholder="Enter the gender" value={gender} onChange={(updatedata) => { setGender(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr>
                                            <td>
                                                <select id="role" value={role} onChange={(updatedata) => { setRole(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0">
                                                    <option>select the Roll</option>
                                                    <option value="Admin">Admin</option>
                                                    <option value="User">User</option>
                                                </select><br /><br />
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="2">
                                                <button type="submit" className="btn btn-success btn-block rounded w-100 p-1 border-0">Register</button>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 