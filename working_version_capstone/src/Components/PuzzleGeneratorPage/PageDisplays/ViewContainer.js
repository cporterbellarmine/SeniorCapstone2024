import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

export const HideXsContainer = styled(Container)`
    background-color: darkgrey;

    @media screen and (min-width: 768px){
        display: none;
    };
`;

export const HideMdContainer = styled(Container)`
    background-color: darkgrey;

    @media screen and (max-width: 767px){
        display: none;
    };
`;