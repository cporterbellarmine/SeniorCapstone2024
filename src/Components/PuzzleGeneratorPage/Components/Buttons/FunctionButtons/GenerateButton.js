// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage


//Determines the words to be used in the puzzle and creates the actual puzzle
//format when the 'Generate' button is called.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

//Topic is passed down from /PuzzleGeneratorPage/PageDisplays/MdGeneratorPage
//and set in /PuzzleGeneratorPage/Components/Dropdowns/TopicDropdown. This is
//used to query the database for words associated with a particular topic.

//Difficulty is passed down from \PuzzleGeneratorPage\PageDisplays\MdGeneratorPage
//and set in \PuzzleGeneratorPage\Components\Dropdowns\DifficultyDropdown and
//reset in \PuzzleGeneratorPage\Components\Dropdowns\TopicDropdown. This is used
//to set the difficulty chosen for the puzzle.

//Callback is passed down from /PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
//and is used to set the final puzzle object in \PuzzleGeneratorPage\Components\DisplayContainers\PreviewDisplay.

const GenerateButton = ({ topic, callBack, difficulty }) => {

    // Set State Hooks
    const[wordData, setWordData] = useState([]); //Used to gather data from database.
    const[usableWords, setUsableWords] = useState([]); //Used to store words that comply with the chosen difficulty
    const[usableWordsArrayLength, setUsableWordsArrayLength] = useState(0); //Used to store the number of words that comply with the chosen difficulty
    const[puzzleWords, setPuzzleWords] = useState([]); //Used to store the random words that will be used in the puzzle.
    const[puzzle, setPuzzle] = useState([]); //Used to store the final puzzle.

    const wordsArray = []; //Stored as a stand-in-array for usableWords.
    const lettersArray = new Set([]);
    const numberOfWordsForEasy = 10; //Number of words to choose for easy difficulty
    const numberOfWordsforIntermediate = 20; //Number of words to choose for intermediate difficulty
    const numberOfWordsForDifficult = 30; //Number of words to choose for difficult difficulty
    const numberOfWordsforExpert = 40; //Number of words to choose for expert difficulty

    //Decided to hard code values because there are only a few options available.
    const charactersRangeEasy = [3, 4, 5]; //number of letters in a word included in easy difficulty
    const charactersRangeIntermediate = [3, 4, 5, 6, 7, 8, 9, 10]; //number of letters in a word included in easy difficulty
    const charactersRangeDifficultandExpert = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; //number of letters in a word included in easy difficulty
    
    const sizeOfEasy = 8;
    const sizeOfIntermediate = 15;
    const sizeOfDiffExp = 23;
    
    //When the topic is updated, gather the words associated with the topic in the database
    useEffect(() => {
        const fetchTopicWords = async () => {
            try{
                const response = await axios.get(`https://senior-capstone2024-backend.vercel.app/words?topic=${topic}`); //Uses query String
                console.log(response, response.data);
                setWordData(response.data); //.data is where the actual values are stored.
            }catch(error){
                console.error('Error fetching words', error);
            };
        };
        fetchTopicWords();
    }, [topic]);

    //For each word collected, add it to a new array
    wordData.map(data => {
        wordsArray.push(data.word);
    });

    //When difficulty is changed, iterates through the values in wordsArray and tracks the number of characters in each word.
    //Checks if the number of characters in the array is within the acceptable charactersRange array for this particular difficulty.
    //If the word fits the character eligibility, push to an array that represents eligible words to use.
    useEffect(() => {
        const findEligibleWords = () => {
            const wordsToCheck = wordsArray; //Words to iterate over
            const eligibleWords = []; //Word that contains the appropriate length requirement.

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
            setUsableWords(eligibleWords); //Sets the state
        };
        findEligibleWords(); //Calls function
    }, [difficulty])

    //When the number of usable words changes, record the number of
    //useable words in the state variable. This will be used to iterate
    //over the array to find a random value.
    useEffect(() => {
        setUsableWordsArrayLength(usableWords.length);
    }, [usableWords]);

    //Initializes the random number generator.
    function randomIntGenerator(maxInt){
        return(Math.floor(Math.random() * maxInt));
    };

    useEffect(() => {
       const chooseWords = () => { 
            let wordsToChooseFrom = usableWords;
            let numberOfWordsLeftToChoose;
            const chosenWords = [];

            //Sets the number of words to choose.

            switch(difficulty){
                case 'Easy':
                    numberOfWordsLeftToChoose = numberOfWordsForEasy;
                    break;
                case 'Intermediate':
                    numberOfWordsLeftToChoose = numberOfWordsforIntermediate;
                    break;
                case 'Difficult':
                    numberOfWordsLeftToChoose = numberOfWordsForDifficult;
                    break;
                case 'Expert':
                    numberOfWordsLeftToChoose = numberOfWordsforExpert;
                    break;
                default:
                    console.log('No difficulty chosen. Cannot choose words.');
            };

            //Every time the number of number of of eligible words changes, 
            //sets a counter and gets the value of words currently eligible to use. No need to
            //reset every time the array changes because it will use the same numbers.
            //Chooses a random number between 0 and the number of words eligible and 
            //finds the value of the word in the generated index in the eligible words.
            //Add the word to the chosen words list and reset the eligible words list to
            //disclude the chosen value.
            //Decrease the number of words left to choose and continue until the number of words left
            //to choose is 0. Uses state to set the chosen words.
            while(numberOfWordsLeftToChoose > 0){
                const wordsToChooseFromLength = wordsToChooseFrom.length;
                const randomIndex = randomIntGenerator(wordsToChooseFromLength);
                const wordToBeAdded = wordsToChooseFrom[randomIndex];
                chosenWords.push(wordToBeAdded);
                wordsToChooseFrom = wordsToChooseFrom.filter(word => word !==wordToBeAdded);
                numberOfWordsLeftToChoose--;
            };
            setPuzzleWords(chosenWords);
        };
        chooseWords();
    }, [usableWords])

    console.log(puzzleWords);

    useEffect(() => {
        puzzleWords.map(word => {
            for(let i = 0; i < word.length; i++) {
                lettersArray.add(word[i]);
            };
        });
        console.log(lettersArray);
    }, [puzzleWords]);

    useEffect(() => {

        let puzzleSize;
        const puzzleStorage = [];
        const wordStorage = [];

        switch(difficulty){
            case 'Easy':
                puzzleSize = sizeOfEasy;
                break;
            case 'Intermediate':
                puzzleSize = sizeOfIntermediate;
                break;
            case 'Difficult' || 'Expert':
                puzzleSize = sizeOfDiffExp;
                break;
            default:
                console.log('No difficulty chosen. Cannot generate puzzle size.');
        };

    }, [puzzleWords, difficulty])

    return(
        <Button variant='primary' size='lg'>Generate Puzzle</Button>
    );
};
export default GenerateButton;