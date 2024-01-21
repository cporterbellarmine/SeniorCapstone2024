import React from 'react';
import NavBarRouting from './NavBarRouting';
import './MainHeader.css'

function MainHeader() {
    return(
        <>
            <div className='MainHeader-headerDiv'>
                <h1>Word Search Generator</h1>
            </div>
            <NavBarRouting />
        </>  
    );
};
export default MainHeader;