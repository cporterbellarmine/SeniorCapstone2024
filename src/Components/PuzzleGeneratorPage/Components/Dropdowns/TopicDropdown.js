// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

//Callback sets the topic and passed up to /PuzzleGeneratorPage/PageDisplays/MdGeneratorPage.
//This is used to pull associated difficulties and words associated with the topic in the
//database.

//SelectedCallback is passed to \PuzzleGeneratorPage\Components\Dropdowns\DifficultyDropdown
//and resets the difficulty value and dropdown.
function TopicDropdown({ topicCallback, selectedCallback }){
    const[topics, setTopics] = useState([]);

    //This is not re-rendered because the topic value isn't set until the end.
    useEffect(() => {
        const fetchTopics = async () => {
            try{
                const response = await axios.get('https://senior-capstone2024-backend.vercel.app/topics'); //No query string, just calls collection.
                setTopics(response.data); //.data is where the query values are held.
            } catch (error){
                console.error('Error fetching topics:', error);
            }
        };
        fetchTopics();
    }, []);


    return(
        //Iterates through the available topics and creates a dropdown select.
        //When clicked, the topic value is changed and the difficulty level is reset.
        <Form.Select onChange={(e) => {
            topicCallback(e.target.value);
            selectedCallback('defaultChoose');
            }}>
            <option value='default'>Click to choose a topic.</option>
            {topics.map(topic =>
                <option key={topic.topic} value={topic.topic}>
                    {topic.topic}
                </option>
            )}
        </Form.Select>
    );
}
export default TopicDropdown;