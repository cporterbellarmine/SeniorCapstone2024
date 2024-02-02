import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

export const MdMainContainerBackground = styled(Container)`
    background-color: darkcyan;

    @media screen and (max-width: 767px){
        display: none;
    };
`;

export const XsMainContainerBackground = styled(Container)`
    background-color: darkcyan;

    @media screen and (min-width: 768px){
        display: none;
    };
    
`;

export const CenteredNavBar = styled(Nav)`
    text-align: center;
`;

export const SubCol = styled(Col)`
    background-color: rosybrown;
`;

export const TopicsTitleRow = styled(Row)`
    background-color: gold;
`;

export const TopicsParentContainer = styled(Container)`
    background-color: gold;
`;

export const ListGroupBackground = styled(ListGroup)`
    background-color: gold;
`;

export const WordsParentContainer = styled(Container)`
    background-color: mediumaquamarine;
`;