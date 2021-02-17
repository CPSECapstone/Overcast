import React, {useState} from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome} from "@fortawesome/free-solid-svg-icons";


const homeIcon = <FontAwesomeIcon icon={faHome} />
const barIcon = <FontAwesomeIcon icon={faBars}/>

function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const className = isSidebarOpen ? "sidebar sidebar-open" : "sidebar";

    return (
        <div>
            <div class={className}>
            <span class="barIcon"><i className="fas fa-bars" onClick={showSidebar} style={{ fontSize: '1.75em' }}>{barIcon}</i></span>
                <ul class="ul">
                    <li class="list">
                        <a class="items" href="/">
                            <span class="icon"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }}>{homeIcon}</i></span>
                            <span class="title">Home</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
 }
 
 export default Sidebar;
 