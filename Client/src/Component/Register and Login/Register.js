import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import axios from "axios";
import 'aos/dist/aos.css'

export function Register() {

    useEffect(() => {
        Aos.init();
    }, [])

    function handleregister(event) {
        event.preventDefault()  
        var userName = document.getElementById("userName").value;
        alert("Hi "+userName+" Successfully Register")
        var age = document.getElementById("age").value;
        var email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var location = document.getElementById("location").value;
        var dob = document.getElementById("dob").value; 
        var isRole = document.getElementById("isRole").value;
        var password = document.getElementById("password").value;

        var regdetails = {
            userName: userName,
            age: age,
            email: email,
            phoneNumber: phoneNumber,
            location: location,
            dob: dob,
            isRole: isRole,
            password: password  
        }

        if (userName===''){
            alert("Enter The Fields")
        } else {
            axios.post("http://localhost:8080/auth/create", regdetails)
                .then((res) => {
                    if (res.data.responseMsg === "Error") {
                        alert("Data Are Not Inserted")
                    } else if (res.data.responseMsg === "Success"){
                        alert("Registration Successfully")
                        window.location.href = '/login'
                    }
                })
                    //Node JS
            //  axios.post("http://localhost:5000/register", regdetails)
            //     .then((res) => {
            //         if (res.data.status === "error") {
            //             alert("Data Are Not Inserted")
            //         } else if (res.data.status === "success"){
            //             alert("Registration Successfully")
            //             window.location.href = '/login'
            //         }
            //     })
            
        }
    }

    return (
        <>
            <form onSubmit={handleregister}>
                <main data-aos="fade-up" className="reg-bg">
                    <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                        <div className="regCard container d-flex flex-column align-items-center justify-content-center gap-3">
                            <h2>
                                <Typewriter options={{ strings: ['Register Form'], autoStart: true, loop: true }} />
                            </h2>
                            <input type="text"  placeholder="Enter Name" id="userName" required />
                            <input type="text" placeholder="Enter Age" id="age" required />

                            <input type="email" placeholder="Enter E-Mail" id="email" required />

                            <input type="tel" pattern="^[6-9]{1}[0-9]{9}" id="phoneNumber" placeholder="Enter Your PhoneNumber" required />
                            <input type="text" placeholder="Enter Location" id="location" required />

                            <input type="date" id="dob" placeholder="Enter Your DOB" required />
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <label>Role:</label>
                                <select id="isRole">

                                    <option value='' >Select The Role</option>
                                    <option className="opt1" value='customer'>CUSTOMER</option>
                                    <option className="opt2" value='Owner'>OWNER</option>
                                </select>
                            </div>
                            <input type="password" placeholder="Password" id="password" required />
                            <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                                <button className="rounded border-0 w-50" type="submit">REGISTER</button>
                            </div>
                            <p>Already have an Account ? <Link to='/login'>Login</Link> </p>
                        </div>
                    </div>
                </main>
            </form>




        </>
    );


}