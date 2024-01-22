import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NoWrapContainer } from '../ComponentStyling';
import Container from 'react-bootstrap/Container';
import NavBarRouting from './NavBarRouting';
import './MainHeader.css'

function MainHeader() {
    return(
        <NoWrapContainer>
            <Row>
                <div className='MainHeader-headerDiv p-4'>
                    <h1>Word Search Generator</h1>
                </div>
            </Row>
            <Row>
                <NavBarRouting />
            </Row>
        </NoWrapContainer>  
    );
};
export default MainHeader;