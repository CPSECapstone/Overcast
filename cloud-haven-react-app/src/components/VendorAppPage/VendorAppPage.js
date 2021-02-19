import React from 'react';
import { FileList, CustomForm } from '../components';
import './VendorAppPage.css';

const isOnVendorHomePage = false;

export default props => {
    return (
        <React.Fragment>
            {isOnVendorHomePage &&
            <h1>
                {props.vendorId}
            </h1>}
            <div id="FileFeaturePage">
                <FileList />
                <CustomForm fields={props.components[0].Fields}/>
            </div>
        </React.Fragment>
    )
}
