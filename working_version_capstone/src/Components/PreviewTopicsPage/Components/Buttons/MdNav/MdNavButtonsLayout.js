import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import ButtonLinkTemplate from '../../../../ButtonLinkTemplate';

function MdNavButtonsLayout(){
    return(
        <>
            <Nav>
                <Stack direction="horizontal" gap={5} className='mx-auto'>
                    <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create a Topic"/>
                    <ButtonLinkTemplate pathway="/edit-topic" textDisplayed="Edit Topics"/>
                </Stack>
            </Nav>
            <Outlet />
        </>
    );
};
export default MdNavButtonsLayout;