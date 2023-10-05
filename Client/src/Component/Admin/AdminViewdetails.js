import React,{ useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './admin.css'
import { CSVLink } from "react-csv";
export function AdminViewDetails(){

    const[data,setData]=useState([])
    useEffect(()=>{

        axios.get("http://localhost:8080/auth/getall")
        .then((res)=>{
            // console.log(res)
            setData(res.data.jData)
            
        })
    })
    function handledelete(email){
        var data={email:email}
    
        axios.post("http://localhost:8080/auth/deleteall",data)
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
                <h1 className="text-center m-3">View All Customer and StationOwner</h1>
                <Link to='/adminhomepage' className='btn btn-primary '  >Back</Link>
                <CSVLink data={data}className="btn btn-success ms-3 m-2" >Download Sheets</CSVLink>
        <table>
            <thead>
                <tr id="header">
                    <th>UserName</th>
                    <th>Age</th>
                    <th>E-Mail</th>
                    <th>PhoneNumber</th>
                    <th>D-O-B</th>
                    <th>Location</th>
                    <th>Role</th>
                    <th>Active</th>
                    <th>Action</th>
                    </tr>
            </thead>
                    <tbody>
                        {
                            data.map((value,index)=>(
                                <>                            
                                <tr>
                                <td>{value.userName}</td>
                                <td>{value.age}</td>
                                <td>{value.email}</td>
                                <td>{value.phoneNumber}</td>
                                <td>{value.dob}</td>
                                <td>{value.location}</td>
                                <td>{value.isRole}</td>
                                <td>{value.isActive}</td>
                                <td><Link to='' className='btn btn-danger' onClick={()=>{handledelete(value.email)}} >Delete</Link></td>
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