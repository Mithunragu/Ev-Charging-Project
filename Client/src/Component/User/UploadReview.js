import React from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";

export function UploadReview(){

    function handlereview(event){
        event.preventDefault()

        var feed=document.getElementById("feed").value
        var rating=document.getElementById("rating").value
  

        var addreview = {
            feedBack: feed,
            rating: rating
        }

        if (feed===''&& rating===''){
            alert("Enter The Fields")
        } else {
            axios.post("http://localhost:8080/auth/createfeedback", addreview)
                .then((res) => {
                    if (res.data.responseMsg === "Error") {
                        alert("Internal Server Error!")
                    } else if (res.data.responseMsg === "Success"){
                        alert("User Feedback Given Successfully")
                        window.location.reload();
                    }
                })

    }

    }





    return(
        <>
        <form>
                <main className="station-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard py-5 container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['Enter Your FeedBack'], autoStart: true, loop: true }} />
                            </h2>
                            <label className=" "><h5>Enter Your Feedback :</h5></label>
                        <textarea className="w-100 " placeholder="Enter Your FeedBack" id="feed" required ></textarea>   
                            <input type="number" id="rating" placeholder="Enter Your Rating"  required />
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button type="submit" className="rounded border-0 w-50" onClick={handlereview}>Click</button>
                            </div>
                        </div>
                    </div>
                </main>
            </form>
        
        
        </>
    )
}