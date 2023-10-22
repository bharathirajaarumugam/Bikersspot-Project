import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Getfromnode() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getall")
            .then(res => res.json())
            .then(details => setData(details))
    })
    function handledelete(user_id) {
        alert(user_id)
        var Deletedata = {
            user_id: user_id
        }
        alert(Deletedata.user_id)
        axios.post("http://localhost:3005/delete", Deletedata)
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
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>E-Mail</th>
                        <th>Password</th>
                        <th>gender</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => (
                            <>
                                <tr>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                    <td>{value.phone_number}</td>
                                    <td>{value.email}</td>
                                    <td>{value.password}</td>
                                    <td>{value.gender}</td>
                                    <td>{value.role}</td>
                                    <td>
                                        <Link to='/update' className="btn btn-success">Update</Link>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => { handledelete(value.user_id) }}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}