// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

//Topic is used to pull the difficulties available for that topic.

//DifficultyCallback is used to reset the value of the difficulty when the topic is changed.

//Selected and selectedCallback are used to change the active dropdown in topic. If this is changed,
//then the difficulty is reset.

function DifficultyDropdown({ topic, difficultyCallback, selected, selectedCallback }){
    
    const[topicData, setTopicData] = useState([]); //Used to set the chosen topic value.
    const[difficultyValues, setDifficultyValues] = useState([]);

    const difficulties = ["Easy", "Intermediate", "Difficult", "Expert"];


    useEffect(() => {
        const fetchDifficultyData = async () => {
            try{
                const response = await axios.get(`https://senior-capstone2024-backend.vercel.app/topics?topic=${topic}`); //Query string
                setTopicData(response.data[0]); //.data is where the actual values are stored, and [0] accesses the entry.
            } catch (error){
                console.error('Error fetching topic:', error);
            };
        };
        fetchDifficultyData();
    }, [topic]);

    //When the topic data is changed and has a value, creates an array with the associated
    //difficulty eligibility booleans into an array with the correct values in order:
    //[easy, intermediate, difficult, expert]
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
            
            {/* Maps through the difficulty value arrays and upon a true value, generates a clickable value. If false, it generates a non-clickable value. */}
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