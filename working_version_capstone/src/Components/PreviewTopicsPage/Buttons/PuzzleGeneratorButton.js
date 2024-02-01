import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ButtonLinkTemplate from '../../ButtonLinkTemplate';

function PuzzleGeneratorButton(){
    return(
        <>
            <Nav>
                <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
            </Nav>
        </>
    );
};
export default PuzzleGeneratorButton;