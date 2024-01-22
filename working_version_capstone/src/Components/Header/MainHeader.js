import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarRouting from './NavBarRouting';
import './MainHeader.css'

function MainHeader() {
    return(
        <Col>
            <Row>
                 <div className='MainHeader-headerDiv'>
                    <h1>Word Search Generator</h1>
                </div>
            </Row>
            <Row>
                <NavBarRouting />
            </Row>
        </Col>  
    );
};
export default MainHeader;