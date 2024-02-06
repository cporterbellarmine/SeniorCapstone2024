// Used in /src/App

import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavBarRouting from './NavBarRouting';
import './main-header.css'

function MainHeader() {
    return(
        <Container fluid className='m-0'>
            <Col>
                {/* <Row>
                    <div className='main-header-div p-4'>
                        <h1>Word Search Generator</h1>
                    </div>
                </Row> */}
                <Row>
                    <NavBarRouting />
                </Row>
            </Col>
            
        </Container>  
    );
};
export default MainHeader;