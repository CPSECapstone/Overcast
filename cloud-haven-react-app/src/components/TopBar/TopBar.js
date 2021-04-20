import React from 'react';
import './TopBar.css';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown.js'

function TopBar() {
   return (
      <div id="TopBar">
         <a href="/">
            <div id="TopBarHeader">
               <img id="CloudHavenLogo" alt="Cloud Haven" src={require("../../images/cloudhavensiteicon.png")}/>
               <span id="CloudHavenHeaderText">CloudHaven</span>  
            </div>
         </a>
         <div id="ProfileDropdown" className="pull-right">
            <ProfileDropdown />
         </div>
      </div>
   );
}

export default TopBar;
