import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Usergetone() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getall")
            .then(res => res.json())
            .then(details => setData(details))
    }, [])
    function handledelete(user_id) {
        alert(user_id)
        var Deletedata = {
            user_id: user_id,
        }
        alert(Deletedata.user_id)
        axios.post("http://localhost:3005/delete", Deletedata)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data is deleted")
                    // window.location.href='/viewservice'
                }
            })
    }
    return (
        <>
            <section className="text-center">
                <div className="bg-info text">
                    <h1 className="text-center p-2"><span className="spn1">User</span>Details</h1>
                    {/* <div className="d-flex justify-content-center p-2">
                        <Link to="" className="btn btn-warning">Create +</Link>
                    </div> */}
                </div>
                <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                    <div className="w-60 bg-white rounded p-2">
                        <table className="table table-sm table-bordered table-striped border-danger">
                            <thead className="table table-bordered table-striped border-danger bg-primary">
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
                                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                                    <Link to={`/read/${value.user_id}`} className="btn btn-info">Read</Link>
                                                    <Link to={`/update/${value.user_id}`} className="btn btn-success">Update</Link>
                                                    <button className="btn btn-danger" onClick={() => { handledelete(value.user_id) }}>Delete</button>
                                                </div>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}