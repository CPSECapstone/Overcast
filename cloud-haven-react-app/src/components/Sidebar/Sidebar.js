import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";


const homeIcon = <FontAwesomeIcon icon={faHome} />

function Sidebar() {
    return (
        <div class="sidebar">
            <ul class="ul">
                <li class="list">
                    <a class="items" href="/">
                        <span class="icon"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }}>{homeIcon}</i></span>
                        <span class="title">Home</span>
                    </a>
                </li>
            </ul>
        </div>
    );
 }
 
 export default Sidebar;
 