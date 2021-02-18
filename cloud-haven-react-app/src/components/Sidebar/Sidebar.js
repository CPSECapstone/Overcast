import React, {useState} from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faHome, faQuestion} from "@fortawesome/free-solid-svg-icons";

const homeIcon = <FontAwesomeIcon icon={faHome} />
const barIcon = <FontAwesomeIcon icon={faBars}/>
const questionMarkIcon = <FontAwesomeIcon icon={faQuestion}/>


function Sidebar(props) {
    const setSelected = () => {
        
    }
    return (
        <div>
            <div class={props.className}>
            <span class="barIcon"><i className="fas fa-bars" onClick={props.showSidebar} style={{ fontSize: '1.75em' }}>{barIcon}</i></span>
                <ul class="ul">
                    <li class="list">
                        <a class="item" href="/" onClick={setSelected}>
                            <span class="sidebar-selected-color circle-icon-selected icon"><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }}>{homeIcon}</i></span>
                            <span class="sidebar-selected-color rectangle title">Home</span>
                        </a>
                        <a class="item" href="/test">
                            <span class="sidebar-app-color circle-icon icon"><i className="fa fa-fw fa-question" style={{ fontSize: '1.75em' }}>{questionMarkIcon}</i></span>
                            <span class="title">Test Application</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Sidebar;
 