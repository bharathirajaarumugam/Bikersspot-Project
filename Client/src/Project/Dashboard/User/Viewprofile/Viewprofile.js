import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Viewprofile(){

    var { id } = useParams()
    const [first_name, setFirstname] = useState('')
    const [last_name, setLastname] = useState('')
    useEffect(() => {
        fetch('http://localhost:3005/getone/' +id) 
            .then(data => data.json())
            .then((res) => {
                setFirstname(res[0].first_name)
                setLastname(res[0].last_name)
            })
    }, [])

    return(
        <>
        <h1>View Profile</h1>

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <h1><span className="text-primary">User </span>Details</h1>
                    <h2>{id}</h2>
                    <h2>{first_name}</h2>
                    <h2>{last_name}</h2>
                    <Link to="/read/:user_id" className="btn btn-success">Back</Link>    
                </div>
            </div>
        </>
    )
}