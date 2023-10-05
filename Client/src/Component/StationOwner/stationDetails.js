import axios from "axios";
import React from "react";
import Typewriter from "typewriter-effect";

export function StationDetails() {

    function handlestationdetails() {

        var stationName = document.getElementById("stationName").value
        var price = document.getElementById("price").value
        var contactDetails = document.getElementById("contactDetails").value
        var location = document.getElementById("location").value
        var area = document.getElementById("area").value
        var map = document.getElementById("map").value
        var rating = document.getElementById("rating").value

        let stationdetails = {
            stationName: stationName,
            price: price,
            contactDetails: contactDetails,
            location: location,
            area: area,
            map: map,
            rating: rating
        }
        if (stationName === '') {
            alert("Enter The Fields")
        } else {
            axios.post("http://localhost:8080/auth/insertevdetails", stationdetails)
                .then((res) => {
                    if (res.data.responseMsg === "Success") {
                        alert("StationOwner Uploaded successfully!")
                        window.location.href = '/ownerhomepage'
                    } else if (res.data.responseMsg === "Error") {
                        alert("Details Are Not Inserted")
                    }
                })
        }




    }
    return (
        <>
            <form onSubmit={handlestationdetails}>
                <main className="station-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard py-5 container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['Upload Station Details'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="text" placeholder="Enter StationName" id="stationName" required />
                            <input type="number" placeholder="Enter Price" id="price" required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" id="contactDetails" placeholder="Enter Your ContactNumber" required />

                            <input type="text" placeholder="Enter Location" id="location" required />
                            <input type="text" placeholder="Enter Area" id="area" required />

                            <input type="text" id="map" placeholder="Enter The Map Link" required />
                            <input type="number" id="rating" placeholder="Enter Your Rating" required />
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button type="submit" className="rounded border-0 w-50">UPLOAD DETAILS</button>
                            </div>
                        </div>
                    </div>
                </main>
            </form>


        </>);
}