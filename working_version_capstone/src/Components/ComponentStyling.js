import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";

//Used in Components\Header\MainHeader.js
export const NoWrapContainer = styled(Container)`
    flex-wrap: nowrap;
`;

//Used in Components\Header\NavBarLayout.js
export const StyledBSNavBar = styled(Nav)`
    background-color: crimson;
`;

//Used in Components\Header\NavigationLinkTemplate.js
export const StyledNavLink = styled(NavLink)`
    display: inline-grid;
    border-left: solid;
    border-right: solid;
    border-width: thin;
    align-content: center;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: maroon;
        color: white;
    }
`;

//Used in Components\HomePage\ButtonLinkTemplate.js
export const StyledButtonLink = styled(NavLink)`
    display: grid;
    outline: solid;
    place-content: center;
    background-color: crimson;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: maroon;
        color: white;
    }

    @media screen and (max-width: 575px){
        border: dotted;
    }
    
`;

//Used in Components\HomePage\PuzzlePicture.js
export const PhotoSpot = styled(Col)`
    background-color: cadetblue;
    
    // @media screen and (max-width: 576px){
    //     display: none;
    // }
`;
