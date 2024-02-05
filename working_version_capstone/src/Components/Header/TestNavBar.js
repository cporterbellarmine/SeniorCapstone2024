import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/navbar';

function TestNavBar(){
    return(
        <Navbar>
            <Container>
                <Navbar.Brand href='/home'>Puzzle Generator </Navbar.Brand>
            </Container>
            <Nav defaultActiveKey='home'>
                <Nav.Item>
                    <Nav.Link href='/home'>Home</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>

    );
};
export default TestNavBar;