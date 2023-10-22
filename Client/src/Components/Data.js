import React, { useEffect, useState } from "react";
export function Json() {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(details=>setData(details))
    })
    return (
        <>
            <h1>Hii welcome to coimbatore</h1>
            {
                data.map((value, index) => (
                    <>
                        <h1>{value.id}</h1>
                        <h1>{value.price}</h1>
                        <h1>{value.title}</h1>
                        <img src={value.image}/>
                    </>
                ))
            }
        </>
    );
}