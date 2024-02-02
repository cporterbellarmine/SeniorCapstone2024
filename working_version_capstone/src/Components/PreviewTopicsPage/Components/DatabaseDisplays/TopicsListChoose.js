import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { TopicsParentContainer } from '../../PreviewTopicsCompStyling';
import './list_group.css';

function TopicsListChoose(){
    return(
        <TopicsParentContainer>
            <Row>
                <h2>Choose a Topic:</h2>
            </Row>
            <Row>
                <ListGroup variant='flush' className='p-0 overflow-y-scroll list_group-height'>
                    <ListGroup.Item action>Topic 1</ListGroup.Item>
                    <ListGroup.Item action>Topic 2</ListGroup.Item>
                    <ListGroup.Item action>Topic 3</ListGroup.Item>
                </ListGroup>
            </Row>  
        </TopicsParentContainer>
        
    );
};
export default TopicsListChoose;