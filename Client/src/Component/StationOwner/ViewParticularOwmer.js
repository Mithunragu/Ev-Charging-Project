import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CSVLink } from "react-csv";
export function ViewParticularStation(){

 
    const[station,setStation]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/auth/getallstation")
        .then((res)=>{
            // console.log(res)
            setStation(res.data.jData)
            
        })
    })
    function handledeletestation(contactDetails){
        var data={contactDetails:contactDetails}
    
        axios.post("http://localhost:8080/auth/deleteevdetails",data)
        .then((res) => {
            if (res.data.responseMsg === "Error") {
                alert("Data Are Not Deleted")
            } else if (res.data.responseMsg === "Success"){
                alert("Deleted Successfully")
                // window.location.reload()
            }
        })

    }

    return(
        <>
        <body className="bg-viewuser mt-4 m-5">
                <h1 className="text-center m-3">View All Station Details</h1>
                <CSVLink data={station}className="btn btn-success ms-3 m-2" >Download Sheets</CSVLink>

                <Link to='/adminhomepage' className='btn btn-primary '  >Back</Link>

        <table>
            <thead>
                <tr id="header">
                    <th>Station-Name</th>
                    <th>PhoneNumber</th>
                    <th>PRICE</th>
                    <th>Location</th>
                    <th>Area</th>
                    <th>Map-Link</th>
                    <th>EV-Status</th>
                    <th >Action</th>
                    </tr>
            </thead>
                    <tbody>
                        {
                            station.map((value,index)=>(
                                <>                            
                                <tr>
                                <td>{value.stationName}</td>
                                <td>{value.contactDetails}</td>
                                <td>{value.price}</td>
                                <td>{value.location}</td>
                                <td>{value.area}</td>
                                <td>{value.map}</td>
                                <td>{value.evStatus}</td>
                                <td><Link to='' className='btn btn-danger' onClick={()=>{handledeletestation(value.contactDetails)}} >Delete</Link><Link   to={`/Update/${value.sNo}`} className='btn btn-primary m-2'  >Edit</Link></td>
                            </tr>
                            </>
                            ))
                        }
                    </tbody>
        </table>
        
        </body>
      
        </>
    );
}