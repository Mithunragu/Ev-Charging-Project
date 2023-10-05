import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Aos from "aos";




export function OwnerHomePage() {
    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <>
            <div className="owner-home-page " data-aos="fade-up">
                <h1 className="topic text-white p-5">
                    <Typewriter options={{ strings: ['WELCOME TO STATION-OWNER-HOME-PAGE'], autoStart: true, loop: true }} />
                </h1>
                <div className="d-flex justify-content-end me-5">
                <Link to='/'><button className="border-0 rounded bg-danger text-white p-2 ">LOGOUT</button></Link>

                </div>
                {/* <button className="rounded border-0 p-3 uploaddetails m-4">UPLOAD-STATION-DETAILS</button> */}
                <div className="row justify-content-center m-2">
                    <div class="card col-lg-3 m-3 card-size">
                        <img src="https://www.pv-magazine.com/wp-content/uploads/2018/09/09021-Innogy_Daimler_Ladestationen_2018-1200x600.jpg" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-danger"> Upload Station Details</h5>
                            <p class="card-text">You can fill in the details based on the specific EV charging station.</p>
                            <center> <Link to='/uploadsd' class="btn btn-danger ownerbutton   justidy-content-center p-3 w-75 fs-5">
                            Upload EV-Station Details                            </Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-3 m-3 card-size">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZsd33SQ1GlYnQ7EUAMKsyr6G2FDwwflIrw&usqp=CAU" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-success "> View  Station Details</h5>
                            <p class="card-text">You can fill in the details based on the specific EV charging station.</p>
                            <center> <Link to='/ViewParticularStation' class="btn btn-success ownerbuttongreen  justidy-content-center p-3 w-75 fs-5">
                            view Station Details</Link></center>
                        </div>
                    </div>
                    <div class="card col-lg-3 m-3 card-size">
                        <img src="https://as1.ftcdn.net/v2/jpg/00/78/39/68/1000_F_78396819_msErWJqT6JS41UKI0sE0s6ToTppGoG0Q.jpg" class="card-img-top h-50" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center text-secondary ">View All Feed-Back</h5>
                            <p class="card-text">You can fill in the details based on the specific EV charging station.</p>
                            <center> <a href="/Viewfeed" class="btn btn-secondary ownerbuttongrey justidy-content-center p-3 w-75 fs-5">                       
                            view All FeedBack </a></center>
                        </div>
                    </div>
                </div>




            </div>

        </>
    );
}