import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export function Locationpage(){

    var {sNo}=useParams()
    const[display,setDisplay]=useState([])
        useEffect(()=>{
            fetch("http://localhost:8080/auth/getstation-details/"+sNo)
            .then(res=>res.json())
            .then(dat=>setDisplay(dat))
        })

    return(
        <>
            <div className="container-fluid row mt-5 bg-success">

                <div className="col-lg-6 p-5">
                    <img src="https://images.unsplash.com/photo-1663008519764-0616547c493a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80" className="container-fluid"/>
                </div>
                <div className="col-lg-6 p-5">
                    <h1><span className="text-danger"><b>StationName : </b></span>{display.stationName}</h1>                    
                <h3><span className="text-danger"> <b>ContactDetails :</b></span>{display.contactDetails}</h3>
                <h3><span className="text-danger"> <b>Area :</b></span>{display.area}</h3>
                <h3><span className="text-danger"> <b>Price :</b></span>{display.price}</h3>
                {/* <h3><span className="text-danger"> <b>map :</b></span>{display.map}</h3> */}
                <h3><span className="text-danger"> <b>EV-Status :</b></span>{display.evStatus}</h3>
                <h3><span className="text-danger"> <b>Rating :</b></span>{display.rating}</h3>

                <Link className="btn btn-danger mt-5 p-3" to='/UploadReview' >Enter Your FeedBack</Link>
                    
                </div>

            </div>
        
        </>
    )

}