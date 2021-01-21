import React from 'react';
import './TopBar.css';

function TopBar() {
   return (
      <div id="TopBar">
         <a href="/">
            <img id="CloudHavenLogo" alt="Cloud Haven" src={require("../../images/CloudHavenLogo.png")}/>
         </a>
   </div>
   );
}

export default TopBar;
