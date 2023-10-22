import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Admin/Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

export function Admin() {
    var {user_id}=useParams()
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3005/getone/"+user_id)
        .then(data=>data.json())
        .then((res)=>{
            setFname(res[0].first_name)
            setLname(res[0].last_name)
        })
    },[])
    return (
        <>
         <div class="container-fluid">
             <nav class="navbar bg-body-tertiary">
                    <div class="container-fluid">
                     <h1>Welcome To <FontAwesomeIcon icon={faUserTie} beatFade />"{fname}{lname}"</h1>
                     <Link to='/view'><button class="btn btn-outline-info">View User Details</button></Link>
                     <Link to=''><button class="btn btn-outline-info">Update My profile</button></Link>
                     <Link to=''><button class="btn btn-outline-info">Update Service</button></Link>
                     <Link to='/'><button className='navbar-sign ms-2 btn btn-primary'>Logout</button></Link>
                 </div>
             </nav>
             <div className="admin-head">
                     <h1>Admin Page</h1>
                 </div>
         </div>
        </>
    );
}