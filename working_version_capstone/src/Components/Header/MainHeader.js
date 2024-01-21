import React from 'react';
import Row from 'react-bootstrap/Row';
import NavBarRouting from './NavBarRouting';
import './MainHeader.css'

function MainHeader() {
    return(
        <>
            <Row>
                 <div className='MainHeader-headerDiv'>
                    <h1>Word Search Generator</h1>
                </div>
            </Row>
            <Row>
                <NavBarRouting />
            </Row>
        </>  
    );
};
export default MainHeader;