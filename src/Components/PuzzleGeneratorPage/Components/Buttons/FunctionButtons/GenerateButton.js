// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const GenerateButton = ({ topic, callBack, difficulty }) => {

    const[wordData, setWordData] = useState([]);
    const[usableWords, setUsableWords] = useState([]);
    const[usableWordsArrayLength, setUsableWordsArrayLength] = useState(0);
    const[puzzleWords, setPuzzleWords] = useState([]);
    const[puzzle, setPuzzle] = useState([]);

    const wordsArray = [];
    const numberOfWordsForEasy = 10;
    const numberOfWordsforIntermediate = 20;
    const numberOfWordsForDifficult = 30;
    const numberOfWordsforExpert = 40;

    const charactersRangeEasy = [3, 4, 5];
    const charactersRangeIntermediate = [3, 4, 5, 6, 7, 8, 9, 10];
    const charactersRangeDifficultandExpert = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    console.log(topic);
    
    useEffect(() => {
        const fetchTopicWords = async () => {
            try{
                const response = await axios.get(`https://senior-capstone2024-backend.vercel.app/words?topic=${topic}`);
                console.log(response, response.data);
                setWordData(response.data);
            }catch(error){
                console.error('Error fetching words', error);
            };
        };
        fetchTopicWords();
    }, [topic]);

    console.log(difficulty);

    {wordData.map(data => {
        wordsArray.push(data.word);
    })};

    useEffect(() => {

        const findEligibleWords = () => {

            const wordsToCheck = wordsArray;
            const eligibleWords = [];
                
            if(difficulty === 'Easy'){
                wordsToCheck.map(word => {
                    const eligible = charactersRangeEasy.includes(word.length);
                    if(eligible) {
                        eligibleWords.push(word)
                    };
                });
    
            }else if(difficulty === 'Intermediate'){
                wordsToCheck.map(word => {
                    const eligible = charactersRangeIntermediate.includes(word.length);
                    if(eligible) {
                        eligibleWords.push(word)
                    };
                });
    
            }else if(difficulty === 'Difficult' || 'Expert'){
                wordsToCheck.map(word => {
                    const eligible = charactersRangeDifficultandExpert.includes(word.length);
                    if(eligible) {
                        eligibleWords.push(word)
                    };
                });
    
            }else{
                console.log('No difficulty selected');
            }; 
    
            setUsableWords(eligibleWords);
        };
        findEligibleWords();
    }, [difficulty])

    useEffect(() => {
        setUsableWordsArrayLength(usableWords.length);
    }, [usableWords]);

    function randomIntGenerator(maxInt){
        return(Math.floor(Math.random() * maxInt));
    };

    function fetchPuzzleWords(){

        console.log(usableWords);
        console.log(usableWordsArrayLength);
        let wordsToChooseFrom = usableWords;
        let numberOfWordsLeftToChoose;
        const chosenWords = [];

        if(difficulty === 'Easy'){
            numberOfWordsLeftToChoose = numberOfWordsForEasy;
        }else if(difficulty === 'Intermediate'){
            numberOfWordsLeftToChoose = numberOfWordsforIntermediate;
        }else if(difficulty === 'Difficult'){
            numberOfWordsLeftToChoose = numberOfWordsForDifficult;
        }else if(difficulty === 'Expert'){
            numberOfWordsLeftToChoose = numberOfWordsforExpert;
        }else{
            console.log('No difficulty chosen.');
        };

        while(numberOfWordsLeftToChoose > 0){
            const wordsToChooseFromLength = wordsToChooseFrom.length;
            const randomIndex = randomIntGenerator(wordsToChooseFromLength);
            const wordToBeAdded = wordsToChooseFrom[randomIndex];
            chosenWords.push(wordToBeAdded);
            wordsToChooseFrom = wordsToChooseFrom.filter(word => word !==wordToBeAdded);
            console.log(wordsToChooseFrom);
            numberOfWordsLeftToChoose--;
            console.log(numberOfWordsLeftToChoose);
        };

        return(chosenWords);
    };

    console.log(fetchPuzzleWords());

    return(
        <Button variant='primary' size='lg'>Generate Puzzle</Button>
    );
};
export default GenerateButton;