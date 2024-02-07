import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";

// Used in /Components/Header/MainHeader
export const NoWrapContainer = styled(Container)`
    flex-wrap: nowrap;
`;

// Used in /Components/Header/NavBarLayout
export const StyledTopNavBar = styled(Nav)`
    background-color: #000000;
`;

// Used in /Components/Header/NavLinkTemplate
export const StyledNavLink = styled(NavLink)`
    display: inline-grid;
    align-content: center;
    color: white;
    text-decoration: none;
    &:hover{
        background-color: #4d4d4d;
        color: white;
        cursor: pointer;
        text-decoration: underline;
    }
    // &:active{
    //     background-color: #de4f3f;
    //     color: black;
    //     text-decoration: underline;
    // }
`;

export const ActiveNav = styled.a`
    background-color: #4d4d4d;
    color: white;
    text-decoration: underline;
`;

// Used in /Components/Header/NavBarLayout
export const StyledLogo = styled(NavLink)`
    display: inline-grid;
    align-content: center;
    color: black;
    text-decoration: none;
`;

// Used in /Components/HomePage/ButtonLinkTemplate
export const StyledButtonLink = styled(NavLink)`
    display: inline-grid;
    outline: solid;
    place-content: center;
    background-color: crimson;
    font-family: "Times New Roman", serif;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: maroon;
        color: white;
        cursor: pointer;
    }
    @media screen and (max-width: 575px){
        border: dotted;
    }
`;

// Used in /Components/HomePage/PuzzlePicture
export const PhotoSpot = styled(Col)`
    background-color: cadetblue;
    
    // @media screen and (max-width: 576px){
    //     display: none;
    // }
`;
