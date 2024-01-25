import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NoWrapContainer } from '../ComponentStyling';
import Container from 'react-bootstrap/Container';
import NavBarRouting from './NavBarRouting';
import './main-header.css'

function MainHeader() {
    return(
        <Container>
            <Row>
                <div className='main-header-div p-4'>
                    <h1>Word Search Generator</h1>
                </div>
            </Row>
            <Row className='d-flex'>
                <NavBarRouting />
            </Row>
        </Container>  
    );
};
export default MainHeader;