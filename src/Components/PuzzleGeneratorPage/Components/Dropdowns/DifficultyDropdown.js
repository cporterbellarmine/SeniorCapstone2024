// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function DifficultyDropdown({ topic }){
    
    const[topicData, setTopicData] = useState([]);

    const difficulties = ["Easy", "Intermediate", "Difficult", "Expert"];
    const difficultyValues = [];


    useEffect(() => {
        console.log(topic);
        const fetchDifficultyData = async () => {
            try{
                    const response = await axios.get(`https://senior-capstone2024-backend.vercel.app/topics?topic=${topic}`);
                    setTopicData(response.data[0]);
            } catch (error){
                console.error('Error fetching topic:', error);
            };
        };
        fetchDifficultyData();
    }, [topic]);
    
    if(topicData){
        const easyResponse = topicData.easy;
        difficultyValues.push(easyResponse);
        const intermediateResponse = topicData.intermediate;
        difficultyValues.push(intermediateResponse);
        const difficultResponse = topicData.difficult;
        difficultyValues.push(difficultResponse);
        const expertResponse = topicData.expert;
        difficultyValues.push(expertResponse);

        console.log(difficultyValues);
        return(
            <Form.Select>
                <option value='default'>Click to choose a difficulty</option>
                {difficultyValues.map((value, index) => {
                    if(value){
                        return(<option key={difficulties[index]} value={difficulties[index]}>{difficulties[index]}</option>);
                    }else{
                        return(<option disabled key={difficulties[index]} value={difficulties[index]}>{difficulties[index]}</option>);
                    };
                })};
            </Form.Select>
        );
    } else {
        return(
            <Form.Select disabled>
                <option value='default'>Please choose a topic above</option>
            </Form.Select>
        );
    }
}
export default DifficultyDropdown;