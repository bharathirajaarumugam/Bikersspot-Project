import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Updateuserservice(){

    var { bookid } = useParams()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [pickup, setPickup] = useState('')
    const [address, setAddress] = useState('')
    const [service, setService] = useState('')
    const [bikemodel, setBikemodel] = useState('')
    const [paymentstatus, setPaymentstatus] = useState('')
    const [bookstatus, setBookstatus] = useState('')

    useEffect(() => {
        fetch('http://localhost:3005/getoneuserservice/'+bookid)
            .then(data => data.json())
            .then((res) => {
                setName(res[0].name)
                setEmail(res[0].email)
                setContact(res[0].contact)
                setPickup(res[0].pickup)
                setAddress(res[0].address)
                setService(res[0].service)
                setBikemodel(res[0].bikemodel)
                setPaymentstatus(res[0].paymentstatus)
                setBookstatus(res[0].bookstatus)
            })
    }, [])

    function serviceupdate(event) {
        event.preventDefault()

        var name = document.getElementById("name").value
        var email = document.getElementById("email").value
        var contact = document.getElementById("contact").value
        var pickup = document.getElementById("pickup").value
        var address = document.getElementById("address").value
        var service = document.getElementById("service").value
        var bikemodel = document.getElementById("bikemodel").value
        var paymentstatus = document.getElementById("paymentstatus").value
        var bookstatus = document.getElementById("bookstatus").value
    
        let updatedservicedetails = {
            name: name,
            email: email,
            contact: contact,
            pickup: pickup,
            address: address,
            service: service,
            bikemodel: bikemodel,
            paymentstatus: paymentstatus,
            bookstatus: bookstatus
        }
        if (bookstatus === '') {
            alert("Fill booking status for confirmed!")
        }
        else {
            axios.post('http://localhost:3005/updateuserservice/'+ bookid, updatedservicedetails)
                .then((res) => {
                    if (res.data.status === "error") {
                        alert("Status is not updated!")
                    }
                    else if (res.data.status === "success") {
                        alert("Status updated successfully!")
                    }
                })
        }
    }

    return(
        <>
        <section>
                <div className="bg-info">
                    <div className="RegMainPage h-100 d-flex justify-content-center align-items-center row">
                        <div className="regcard container d-flex flex-column align-items-center justify-content-center gap-3">
                            <div>
                            <h1 className="text-center">UPDATING USER Services</h1>
                            </div>
                            <form onSubmit={serviceupdate}>
                                <table>
                                    <tbody>
                                        <tr><td><input type="text" id="name" placeholder="Enter the Name" value={name} onChange={(updatedata) => { setName(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="email" placeholder="Enter the Email" value={email} onChange={(updatedata) => { setEmail(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="contact" placeholder="Enter the Contact Number" value={contact} onChange={(updatedata) => { setContact(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="pickup" placeholder="Enter the Pickup Date" value={pickup} onChange={(updatedata) => { setPickup(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="address" placeholder="Enter the Address" value={address} onChange={(updatedata) => { setAddress(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr>
                                            <td>
                                                <select id="service" value={service} onChange={(updatedata) => { setService(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0">
                                                    <option>select the Service</option>
                                                    <option value="Genaral Service">Genaral Service</option>
                                                    <option value="Repair Service">Repair Service</option>
                                                </select><br /><br />
                                            </td>
                                        </tr>
                                        <tr><td><input type="text" id="bikemodel" placeholder="Enter the Bike Model" value={bikemodel} onChange={(updatedata) => { setBikemodel(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="paymentstatus" placeholder="Enter the Payment Status" value={paymentstatus} onChange={(updatedata) => { setPaymentstatus(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                        <tr><td><input type="text" id="bookstatus" placeholder="Enter the BookStatus" value={bookstatus} onChange={(updatedata) => { setBookstatus(updatedata.target.value) }} className="mb-2 rounded w-100 p-1 border-0" /><br /></td></tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="2">
                                                <button type="submit" className="btn btn-success btn-block rounded w-100 p-1 border-0">Submit</button>
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
    )
}