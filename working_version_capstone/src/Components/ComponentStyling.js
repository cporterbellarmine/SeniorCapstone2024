import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import styled from "styled-components";

//Used in Components\Header\NavBarLayout.js
export const StyledBSNavBar = styled(Nav)`
    background-color: crimson;
`;

//Used in Components\Header\NavigationLinkTemplate.js
export const StyledNavLink = styled(NavLink)`
    display: inline-grid;
    background-color: crimson;
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
`;

//Used in Components\HomePage\MenuContainer.js
export const StyledMenuCol = styled(Col)`
    background-color: gainsboro;
`;

//Used in Components\HomePage\PuzzlePicture.js
export const PictureCol = styled(Col)`
    background: cadetblue;
`;