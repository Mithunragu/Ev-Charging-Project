import React, { useState ,useEffect } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import axios from "axios";
import { CSVLink } from "react-csv";
export function ViewFeed(){

    const[feed,setFeed]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/auth/getallreview")
        .then((res)=>{
            console.log(res)    
            setFeed(res.data.jData)
            
        })
    })
    function handlefeedback(sNo){
        var data={sNo:sNo}
        // alert(data.sNo)
        axios.post("http://localhost:8080/auth/deletereview",data)
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
        <body className="bg-viewuser feed mt-4 m-5">
                <h1 className="text-center m-3">View All FeedBack</h1>
                <Link to='/' className='btn btn-danger '  >LOGOUT</Link>
                <CSVLink data={feed}className="btn btn-success ms-3 m-2" >Download Sheets</CSVLink>

        <table className="w-75" >
            <thead>
                <tr id="header">
                    <th>FeedBack</th>
                    <th>Rating</th>
                    <th>Action</th>
                    </tr>
            </thead>
                    <tbody>
                        {
                            feed.map((value,index)=>(
                                <>                            
                                <tr>
                                <td>{value.feedBack}</td>
                                <td>
                                <StarRatings
                                 rating={value.rating}
                                 starDimension="20px"
                                 starSpacing="2px"
                                 starRatedColor="gold"
                                 
                                     />
                                </td>
                                <td><Link to='' className='btn btn-danger' onClick={()=>{handlefeedback(value.sNo)}}>Delete</Link></td>
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