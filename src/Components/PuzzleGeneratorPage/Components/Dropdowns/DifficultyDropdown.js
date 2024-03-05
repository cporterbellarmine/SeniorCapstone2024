// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

function DifficultyDropdown({ topic, difficultyCallback, selected, selectedCallback }){
    
    const[topicData, setTopicData] = useState([]);
    const[difficultyValues, setDifficultyValues] = useState([]);

    const difficulties = ["Easy", "Intermediate", "Difficult", "Expert"];


    useEffect(() => {
        
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

    useEffect(() => {

        if(topicData){
            const difficultyArray = [];

            const easyResponse = topicData.easy;
            difficultyArray.push(easyResponse);
            const intermediateResponse = topicData.intermediate;
            difficultyArray.push(intermediateResponse);
            const difficultResponse = topicData.difficult;
            difficultyArray.push(difficultResponse);
            const expertResponse = topicData.expert;
            difficultyArray.push(expertResponse);

            setDifficultyValues(difficultyArray);  
        };     

    }, [topicData]);

    return(
        <Form.Select value={selected} onClick={(e) => difficultyCallback(e.target.value)} onChange={(e) => selectedCallback(e.target.value)}>
            <option value='defaultChoose'>Click to choose a difficulty</option>
            {difficultyValues.map((value, index) => {
                if(value){
                    return(<option key={difficulties[index]} value={difficulties[index]}>{difficulties[index]}</option>);
                }else{
                    return(<option disabled key={difficulties[index]} value={difficulties[index]}>{difficulties[index]}</option>);
                };
            })}
        </Form.Select>
    );
}
export default DifficultyDropdown;