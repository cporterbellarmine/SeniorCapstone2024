import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styled from "styled-components";

// Used in /Components/Header/MainHeader
export const NoWrapContainer = styled(Container)`
    flex-wrap: nowrap;
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
`;

// Used in /Components/HomePage/PuzzlePicture
export const PhotoSpot = styled(Col)`
    background-color: cadetblue;
    
    // @media screen and (max-width: 576px){
    //     display: none;
    // }
`;
