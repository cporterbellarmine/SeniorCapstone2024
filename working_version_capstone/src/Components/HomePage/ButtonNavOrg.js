import React from 'react';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ButtonLinkTemplate from '../Templates/ButtonLinkTemplate';
import Nav from 'react-bootstrap/Nav';

const ButtonNavOrg = () => {
    return(
        <Container>
            <Nav>
                <Col>
                    <Row>
                        <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    </Row>
                    <Row>
                        <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    </Row>
                    <Row>
                        <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                    </Row>
                </Col>
                    
            </Nav>
            <Outlet />
        </Container>
    );
};
export default ButtonNavOrg;