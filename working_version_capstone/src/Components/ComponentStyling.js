import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledMenuBarNav = styled.nav`
    background: crimson;
    display: flex;
    justify-content: flex-start;
`;

export const StyledMenuBarLink = styled(Link)`
    border-left: solid;
    border-right: solid;
    border-width: thin;
    color: black;
    background-color: crimson;
    padding: 1%;
    display: inline-grid;
    height: 2%;
    &.active{
        background-color: maroon;
    }
`;

export const StyledButtonNav = styled.nav`
    background: crimson;
    display: flex;
    justify-content: flex-start;
`;

export const StyledButtonLink = styled(Link)`
    border-left: solid;
    border-right: solid;
    border-width: thin;
    color: black;
    background-color: crimson;
    padding: 1%;
    display: inline-grid;
    height: 2%;
    &.active{
        background-color: maroon;
    }
`;