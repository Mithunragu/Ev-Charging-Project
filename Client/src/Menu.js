import React from "react";
import { Link } from "react-router-dom";
export function Menu(){

return(

<>
{/* //fixed-top */}
<nav class="navbar navbar-expand-lg ">
  <div class="container-fluid mainNav">
    <Link class="navbar-brand " to="/">EV-Charging</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto  mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active " aria-current="page" to="/login">ADMIN</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/userANDowner">CUSTOMER</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/userANDowner">OWNER</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active tt " to="/">LOGOUT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


</>




);




}
