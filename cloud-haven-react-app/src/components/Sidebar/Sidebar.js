import React, { useState } from "react";
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faQuestion} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />
const barIcon = <FontAwesomeIcon icon={faBars}/>
const questionMarkIcon = <FontAwesomeIcon icon={faQuestion}/>



const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const className = isSidebarOpen ? "sidebar sidebar-open" : "sidebar";
    return(
        <div className={className}>
            <button id="Hamburger" className="barIcon" onClick={showSidebar}><i className="fas fa-bars">{barIcon}</i></button>
        </div>

    )
}

export default Sidebar;