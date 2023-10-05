import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
export function AdminHomePage(){

    return(
        <>
        <div className="owner-home-page " >
                <h1 className="topic text-white p-5">
                    <Typewriter options={{ strings: ['WELCOME TO ADMIN DASHBORD'], autoStart: true, loop: true }} />
                </h1>
                <div className="d-flex justify-content-end me-5">
                <Link to='/'><button className="border-0 rounded bg-danger text-white p-2 ">LOGOUT</button></Link>

                </div>
                <div className="row justify-content-center m-2">
                    <div class="card col-lg-3 m-3 card-size bg-dark">
                        <img src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-danger"> View All Owner and Customer Details</h5>
                            <p class="card-text text-white" >You can view all the Owner and Customer details  .</p>
                            <center> <Link to='/AdminViewDetails' class="btn btn-danger ownerbutton   justidy-content-center p-2 w-75 fs-5">
                           View All Details        </Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-3 m-3 card-size bg-dark">
                        <img src="https://images.unsplash.com/photo-1669349412975-a9dd0d2292ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-success "> View All Station Details</h5>
                            <p class="card-text text-white">You can fill in the details based on the specific EV charging station.</p>
                            <center> <Link to='/viewstation' class="btn btn-success ownerbuttongreen  justidy-content-center p-3 w-75 fs-5">
                            view Station Details</Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-3 m-3 card-size bg-dark">
                        <img src="https://cdn.pixabay.com/photo/2020/01/07/05/42/feedback-4746811_1280.png" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-secondary ">View All User Feed-Back</h5>
                            <p class="card-text text-white">You can fill in the details based on the specific EV charging station.</p>
                            <center> <Link to='/Viewfeed' class="btn btn-secondary ownerbuttongrey justidy-content-center p-3 w-75 fs-5">                       
                            view All User FeedBack </Link></center>
                        </div>
                    </div>
                    
                </div>
            </div>




        </>
    );
}