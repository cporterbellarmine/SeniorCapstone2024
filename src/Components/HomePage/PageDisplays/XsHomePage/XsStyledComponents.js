import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const HomePageAccordionHeader = styled(Accordion.Header)`
    --bs-accordion-btn-bg: #000000;
`;

export const MenuHeader = styled(Row)`
    background-color: #de4f3f;
`;

export const FutureColTitle = styled(Col)`
    background-color: #a4036f;
    color: #ffffff;
`;

export const FutureColGradient = styled(Col)`
    background-image: linear-gradient(to right, #a4036f, #d9d9d9);
`;

export const CreationColTitle = styled(Col)`
    background-color: #de4f3f;
    color: #ffffff;
`;

export const CreationColGradient = styled(Col)`
    background-image: linear-gradient(to right, #de4f3f, #d9d9d9);
`;

export const ExperienceColTitle = styled(Col)`
    background-color: #19647e;
    color: #ffffff;
`;

export const ExperienceColGradient = styled(Col)`
    background-image: linear-gradient(to left, #19647e, #d9d9d9);
`;

export const TitleText = styled.h2`
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000000;
`;

export const XsHomeContainer = styled(Container)`
    @media screen and (min-width: 769px){
        display: none;
    }
`;