// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function TopicDropdown({ callback, selectedCallback }){
    const[topics, setTopics] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try{
                const response = await axios.get('https://senior-capstone2024-backend.vercel.app/topics');
                console.log(response, response.data);
                setTopics(response.data);
            } catch (error){
                console.error('Error fetching topics:', error);
            }
        };
        fetchTopics();
    }, []);


    return(
        <Form.Select onClick={(e) => {
            callback(e.target.value);
            selectedCallback('defaultChoose');
            }}>
            <option value='default'>Click to choose a topic</option>
            {topics.map(topic =>
                <option key={topic._id} value={topic.topic}>
                    {topic.topic}
                </option>
            )}
        </Form.Select>
    );
}
export default TopicDropdown;