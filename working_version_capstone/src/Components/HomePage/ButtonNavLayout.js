import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import { AlignedRowNav } from '../ComponentStyling';
import ButtonLinkTemplate from './ButtonLinkTemplate';


const ButtonNavOrg = () => {
    return(
        <Row>
            <Nav className='p-2'>
                <Stack gap={1} style={{display: 'flex'}}>
                    <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </Nav>
            <Outlet />
        </Row>
    );
};
export default ButtonNavOrg;