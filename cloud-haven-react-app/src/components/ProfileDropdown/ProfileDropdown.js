import React, { useState } from "react";
import './ProfileDropdown.css';

const ProfileDropdown = () => {

    return (
        <div class="dropdown">
         <button class="btn btn-light dropdown-toggle" type="button" data-toggle="dropdown">
            Username
         <span class="caret"></span></button>
         <ul class="dropdown-menu">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <div class="dropdown-divider"></div>
            <li><a href="#">Sign Out</a></li>
         </ul>
      </div>
    )
}

export default ProfileDropdown;
