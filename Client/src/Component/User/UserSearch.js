import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function UserSearch() {

    const [data, setData] = useState([])




    function handlelocation(event) {
        event.preventDefault()
        var location = document.getElementById("location").value


        var locationdetail = {
            location: location
        }

        // console.log(locationdetails)
        if (location === '') {
            alert("Enter the Location")
        }
        else {
            axios.post("http://localhost:8080/auth/getstation-details", locationdetail)
                // .then(data=>data.json())
                .then((res) => {
                    console.log(res)
                    if (res.data.responseMsg === "error") {
                        alert("No such location!")
                    }
                    else if (res.data.responseMsg === "success") {
                        alert("View Your Location Details Successfully!")
                        // window.location.href='/locationpage'
                        setData(res.data.jData)

                    }
                })
        }
    }
    return (
        <>
            <div className="usersearchpage">
                                
                <h1 className="text-white p-1 d-flex justify-content-center"><Typewriter options={{ strings: ['YOU CAN SEARCH YOUR EV-CHARGING STATION LOCATION'], autoStart: true, loop: true }} /></h1>
                <div className="p-2 d-flex justify-content-center">
                    <div className="search-box ">
                        <input type="text" id="location" placeholder="Search Your Location..." />
                        <Link to=''> <FontAwesomeIcon icon={faMagnifyingGlass} onClick={handlelocation} /> </Link>
                    </div>
                </div>
                <div className="row gap-5 mt-5 d-flex justify-content-center">

                    {
                        data.map((value, index) => (
                            // <h1>{value.area}</h1>
                            <>
                                <div class="card col-lg-2 ">
                                    <img src="https://images.unsplash.com/photo-1663008519764-0616547c493a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80" class="card-img-top " />
                                    <div class="card-body">
                                        <h5 class="card-title"><span className="text-danger"><b>StationName : </b></span>{value.stationName}</h5>
                                        <p class="card-text"><span className="text-danger"> <b>Area :</b></span>{value.area}</p>
                                        <p class="card-text"><span className="text-danger"> <b>EV-Status :</b></span> {value.evStatus}</p>
                                        <h5><span className="text-danger"> <b>Rating :</b></span>
                                <StarRatings
                                rating={value.rating}
                                starDimension="20px"
                                starSpacing="2px"
                                starRatedColor="gold"
                                />
                                        </h5>
                                        <Link to={`/locationpage/${value.sNo}`} className="btn btn-danger" >View More</Link>
                                    </div>
                                </div>
                            </>

                        ))
                    }
                    </div>




                </div>



            </>
            );


}