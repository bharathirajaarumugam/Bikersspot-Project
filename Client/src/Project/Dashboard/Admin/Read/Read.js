import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Read() {
    const { user_id } = useParams();
    const [value, Setuser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3005/read/' + user_id)
            .then(result => {
                console.log(result);
                Setuser(result.data[0]);
            })
            .catch(error => console.log(error))
    }, [])
    return (
        <>
            <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
                <div className="w-50 bg-white rounded p-3">
                    <h1><span className="text-primary">User </span>Details</h1>
                    <h2>{value.user_id}</h2>
                    <h2>{value.first_name}</h2>
                    <h2>{value.last_name}</h2>
                    <h2>{value.phone_number}</h2>
                    <Link to="/view" className="btn btn-success">Back</Link>    
                </div>
            </div>
        </>
    );

}