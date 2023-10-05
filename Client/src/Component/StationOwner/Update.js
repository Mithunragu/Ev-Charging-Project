import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
export function Update(){

    
    var {sNo}=useParams()
   
    const[stationname,setStationname]=useState('')
    const[price,setPrice]=useState('')
    const[contactdetails,setContactdetails]=useState('')
    const[location,setLocation]=useState('')
    const[area,setArea]=useState('')
    const[map,setMap]=useState('')
    const[rating,setRating]=useState('')
  
    useEffect(()=>{
       fetch("http://localhost:8080/auth/getstationname/"+sNo)
        .then(data=>data.json())
        .then((res)=>{
            console.log(res)
            setStationname(res.jData[0].stationname)
            setPrice(res.jData[0].price)
            setContactdetails(res.jData[0].contactdetails)
            setLocation(res.jData[0].location)
            setArea(res.jData[0].area)
            setMap(res.jData[0].map)
            setRating(res.jData[0].rating)
        })
        

    },[])
    function handleupdate(event){
        event.preventDefault()
        var stationName=document.getElementById("stationName").value 
        var price=document.getElementById("price").value 
        var contactDetails=document.getElementById("contactDetails").value 
        var location=document.getElementById("location").value 
        var area=document.getElementById("area").value
        var map=document.getElementById("map").value
        var rating=document.getElementById("rating").value

        var updatedetails={
            stationName:stationName,
            price:price,
            contactDetails:contactDetails,
            location:location,
            area:area,
            map:map,
            rating:rating
        }
        if(stationName===''){
            alert("Enter the Field")
        }
        else{
            axios.put("http://localhost:8080/auth/updateevdetails/"+sNo,updatedetails)
            .then((res)=>{

                if(res.data.responseMsg==="Error"){
                    alert("Data are Not Update")
                }
                else if(res.data.responseMsg==="Success"){
                    alert("Data are Updated")
                    window.location.href='/LibraryViewBook'
                }
            })
        }
    }
    

    
    return (
        <>
            <form onSubmit={handleupdate}>
                <main className="station-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard py-5 container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['Update Station Details'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="text" placeholder="Enter StationName" id="stationName" value={stationname} onChange={(updatedata)=>{setStationname(updatedata.target.value)}} required />
                            <input type="number" placeholder="Enter Price" id="price" value={price} onChange={(updatedata)=>{setPrice(updatedata.target.value)}} required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" id="contactDetails" placeholder="Enter Your ContactNumber" value={contactdetails} onChange={(updatedata)=>{setContactdetails(updatedata.target.value)}} required />

                            <input type="text" placeholder="Enter Location" id="location" value={location} onChange={(updatedata)=>{setLocation(updatedata.target.value)}} required />
                            <input type="text" placeholder="Enter Area" id="area" value={area} onChange={(updatedata)=>{setArea(updatedata.target.value)}} required />

                            <input type="text" id="map" placeholder="Enter The Map Link" value={map} onChange={(updatedata)=>{setMap(updatedata.target.value)}} required />
                            <input type="number" id="rating" placeholder="Enter Your Rating" value={rating} onChange={(updatedata)=>{setRating(updatedata.target.value)}} required />
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button type="submit" className="rounded border-0 w-50">UPLOAD DETAILS</button>
                            </div>
                        </div>
                    </div>
                </main>
            </form>


        </>);



}