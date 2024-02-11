// Used in /src/App

import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import XsNavBarRouting from './NavBar/XsComponents/XsNavBarRouting';
import MdNavBarRouting from './NavBar/MdComponents/MdNavBarRouting';

function MainHeader() {
    return(
        <Container fluid className='m-0'>
            <Row>
                <XsNavBarRouting />
                <MdNavBarRouting />
            </Row>
        </Container>  
    );
};
export default MainHeader;