// Used in /Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer
// Used in /Components/PreviewTopicsPage/PageDisplays/XsPreviewTopicsContainer

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { TopicsParentContainer } from '../../PreviewTopicsCompStyling';
import './list_group.css';

function TopicsListChoose(){

        const[topics, setTopics] = useState([]);
    
        useEffect(() => {
            const fetchTopics = async () => {
                try{
                    const response = await axios.get('/topics');
                    setTopics(response.data);
                } catch (error){
                    console.error('Error fetching topics:', error);
                }
            };
            fetchTopics();
        }, []);

    return(
        <TopicsParentContainer>
            <Row>
                <h2>Choose a Topic:</h2>
            </Row>
            <Row>
                <ul>
                    {topics.map(topic => (
                        <li key={topic._id}>{topic.topic}</li>
                    ))}
                </ul>
            </Row>
            <Row>
                <ListGroup variant='flush' className='p-0 overflow-y-scroll list_group-height'>
                    <ListGroup.Item action>Topic 1</ListGroup.Item>
                    <ListGroup.Item action>Topic 2</ListGroup.Item>
                    <ListGroup.Item action>Topic 3</ListGroup.Item>
                    <ListGroup.Item action>Topic 1</ListGroup.Item>
                    <ListGroup.Item action>Topic 2</ListGroup.Item>
                    <ListGroup.Item action>Topic 3</ListGroup.Item>
                    <ListGroup.Item action>Topic 1</ListGroup.Item>
                    <ListGroup.Item action>Topic 2</ListGroup.Item>
                    <ListGroup.Item action>Topic 3</ListGroup.Item>
                </ListGroup>
            </Row>  
        </TopicsParentContainer>
        
    );
};
export default TopicsListChoose;