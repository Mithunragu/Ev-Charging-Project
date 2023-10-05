import React from "react";
import { Link } from "react-router-dom";
import Typewriter  from "typewriter-effect";
import axios from "axios";

export function Login() {

        function handlelogin(event){
        event.preventDefault()

        var email=document.getElementById("email").value 
        var password =document.getElementById("password").value

       


    const  logindetails = {
      email:email,
      password: password
    }
    // const datas = new FormData();
    // for (let key in  logindetails) {
    //     datas.append(key,  logindetails[key])
    //   }      
        if(email===''){
            alert("Enter the Email")
        } else if(password===''){
            alert("Enter The Password")
        }else{
            axios.post("    http://localhost:8080/auth/login",logindetails)
            .then((res)=>{
                if(res.data.data==="Logged as Customer"){
                    alert("✌️Logged as Customer✌️")
                    window.location.href='/usersearch'
                }
                else if(res.data.data==="Logged as Owner"){
                    alert("Logged as Owner")
                    window.location.href='/ownerhomepage'
                    
                }
                else if(res.data.data==="Logged as Admin"){
                    alert("Logged as Admin")
                    window.location.href='/adminhomepage'

                }else{
                    alert("Invalid User")
                }
            })
        }
    }
    return (
        <>
        <form  onSubmit={handlelogin}>
            <main className="login-bg">
                <div className="RegMainPage w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="regCard py-5 container d-flex flex-column align-items-center justify-content-center gap-3">
                        <h2>
                        <Typewriter options={{strings :['Login Form'],autoStart:true,loop:true}}/>
                        </h2>
                        <input type="email" id="email" placeholder="Enter E-Mail" required/>
                        <input type="password" id="password" placeholder=" Password" required/>
                        <div className="w-100 d-flex align-items-center justify-content-center gap-4">
                            <button type="submit" className="rounded border-0 w-50">LOGIN</button>
                        </div>
                        <p>If You Don't have an Account <Link to='/userANDowner'>Register</Link> </p>
                    </div>
                </div>
            </main>
            </form>
        </>
    );
}