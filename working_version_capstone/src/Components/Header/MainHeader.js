import React, { Fragment } from 'react';
import NavigationBar from './NavigationBar';
import './MainHeader.css'

function MainHeader() {
    return(
        <React.Fragment>
            <div className='MainHeader-headerDiv'>
                <h1>Word Search Generator</h1>
            </div>
            <NavigationBar />
        </React.Fragment>  
    );
};
export default MainHeader;