import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Getfromnode() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getall")
            .then(res => res.json())
            .then(details => setData(details))
    }, [])
    function handledelete(id){

        var Deleteseller={
            id:id
        }

        axios.delete(`http://localhost:3005/delete/${Deleteseller.id}`)
        .then((response)=>{
            if(response.data.status==="error"){
                alert("Data are not deleted")
            }
            else if(response.data.status==="success"){
                alert("Data is deleted")
            }
        })
    }
    return (
        <>
            <section className="text-center">
                <div className="text">
                    <h1 className="text-center text-white"><span className="spn1"><br/>User </span>Details</h1>
                </div>
                <div className="d-flex vh-100 justify-content-center align-items-center">
                    <div className="w-60 bg-white rounded">
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