// Used in /src/App

import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NavBarRouting from './NavBarRouting';
import MdNavBarRouting from './NavBar/MdComponents/MdNavBarRouting';
import LogoLargerBrandDarker from '../Images/LogoLargerBrandDarker.png';
import './main-header.css'

function MainHeader() {
    return(
        <Container fluid className='m-0'>
            <Row>
                <MdNavBarRouting/>
            </Row>
        </Container>  
    );
};
export default MainHeader;