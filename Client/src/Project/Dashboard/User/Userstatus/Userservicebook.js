import { useEffect, useState } from "react";

export function Userservicestatus() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/getalluserservice")
            .then(res => res.json())
            .then(details => setData(details))
    }, [])

    return (
        <>
            <section className="text-center">
                <div className="text">
                    <h1 className="text-center text-white"><br />Book Service Details</h1>
                </div>
                <div className=" container d-flex vh-100 justify-content-center align-items-center">
                    <div className="w-60 bg-white rounded">
                        <table className="table table-sm table-bordered table-striped border-danger">
                            <thead className="table table-bordered table-striped border-danger bg-primary">
                                <tr>
                                    <th>Name</th>
                                    <th>E-Mail</th>
                                    <th>Contact</th>
                                    <th>Pickup</th>
                                    <th>Address</th>
                                    <th>Service</th>
                                    <th>Bike Model</th>
                                    <th>Payment Status</th>
                                    <th>Booking Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((value, index) => (
                                        <>
                                            <tr>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.contact}</td>
                                                <td>{value.pickup}</td>
                                                <td>{value.address}</td>
                                                <td>{value.service}</td>
                                                <td>{value.bikemodel}</td>
                                                <td>{value.paymentstatus}</td>
                                                <td>{value.bookstatus}</td>
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
    )
}