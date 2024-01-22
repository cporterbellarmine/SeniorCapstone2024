import React from 'react';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import ButtonLinkTemplate from '../Templates/ButtonLinkTemplate';
import Nav from 'react-bootstrap/Nav';

const ButtonNavOrg = () => {
    return(
        <>
            <Nav>
                <Stack gap={1}>
                    <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </Nav>
            <Outlet />
        </>
    );
};
export default ButtonNavOrg;