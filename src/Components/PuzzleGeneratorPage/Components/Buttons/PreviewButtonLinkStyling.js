import{ NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const StyledButtonLink = styled(NavLink)`
    display: inline-grid;
    outline: solid 1px #780251;
    place-content: center;
    background-color: #a4036f;
    color: #ffffff;
    text-decoration: none;
    &:hover{
        background-color: #640243;
        outline: solid 1px #28011b;
        color: white;
        cursor: pointer;
    }
`;