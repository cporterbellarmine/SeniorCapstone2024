// Used in /Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer
// Used in /Components/PreviewTopicsPage/PageDisplays/XsPreviewTopicsContainer

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { TopicsParentContainer } from '../../PreviewTopicsCompStyling';
import './list_group.css';


function TopicsListChoose({ callback }){

    const[topics, setTopics] = useState([]);
    const[selectedTopic, setSelectedTopic] = useState('');

    useEffect(() => {
        const fetchTopics = async () => {
            try{
                const response = await axios.get('https://senior-capstone2024-backend.vercel.app/topics');
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
                <ListGroup variant='flush' className='p-0 overflow-y-scroll list_group-height list_group-active-background'>
                    {topics.map(topic => (
                        <ListGroup.Item key={topic._id} className={topic.topic === selectedTopic ? 'list_group_active.active active' : 'list_group_active'} action onClick={() => {
                            callback(topic.topic);
                            setSelectedTopic(topic.topic);
                            }
                        } >{topic.topic}</ListGroup.Item>
                    ))}
                </ListGroup>
            </Row>  
        </TopicsParentContainer>
    );
};
export default TopicsListChoose;