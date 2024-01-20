import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledNav = styled.nav`
    background: crimson;
    display: flex;
    justify-content: flex-start;
`;

export const StyledLink = styled(Link)`
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