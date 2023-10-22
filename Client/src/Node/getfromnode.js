// import React, { useEffect, useState } from "react";
// export function Getfromnode(){
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         fetch("http://localhost:3005/getall")
//         .then(res=>res.json())
//         .then(details=>setData(details))
//     })
//     return(
//         <>{
//             data.map((value,index)=>(
//                 <>
//                 <h1>{value.s_no}</h1>
//                 <h1>{value.email}</h1>
//                 <h1>{value.password}</h1>
//                 </>
//                 ))
//             }
//             <h1></h1>
//         </>
//     );
// }