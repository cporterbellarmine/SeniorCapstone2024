// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage


//Determines the words to be used in the puzzle and creates the actual puzzle
//format when the 'Generate' button is called.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PuzzleGeneratorPageButton } from './FunctionButtonStyling';
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';

//Topic is passed down from /PuzzleGeneratorPage/PageDisplays/MdGeneratorPage
//and set in /PuzzleGeneratorPage/Components/Dropdowns/TopicDropdown. This is
//used to query the database for words associated with a particular topic.

//Difficulty is passed down from \PuzzleGeneratorPage\PageDisplays\MdGeneratorPage
//and set in \PuzzleGeneratorPage\Components\Dropdowns\DifficultyDropdown and
//reset in \PuzzleGeneratorPage\Components\Dropdowns\TopicDropdown. This is used
//to set the difficulty chosen for the puzzle.

//Callback is passed down from /PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
//and is used to set the final puzzle object in \PuzzleGeneratorPage\Components\DisplayContainers\PreviewDisplay.

const GenerateButton = ({ topic, callback, difficulty, puzzleWords, puzzleWordsCallback }) => {

    // Set State Hooks
    const [wordData, setWordData] = useState([]); //Used to gather data from database.
    const [allWords, setAllWords] = useState([]);
    const [usableWords, setUsableWords] = useState([]); //Used to store words that comply with the chosen difficulty
    const [usableWordsArrayLength, setUsableWordsArrayLength] = useState(0); //Used to store the number of words that comply with the chosen difficulty
    const [chosenWords, setChosenWords] = useState([]); //Used to store the random words that will be used in the puzzle.
    const [puzzle, setPuzzle] = useState([]); //Used to store the final puzzle.
    const [workingPuzzle, setWorkingPuzzle] = useState([]);
    const [puzzleCoords, setPuzzleCoords] = useState([]);
    const [coordDirections, setCoordDirections] = useState([]);
    const [runAgain, setRunAgain] = useState(false);
    const [workingDirections, setWorkingDirections] = useState(['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest']);
    const [answerKey, setAnswerKey] = useState([]);
    const [usableLetters, setUsableLetters] = useState([]);

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

    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest'];
    let returnValue;

    //When the topic is updated, gather the words associated with the topic in the database
    useEffect(() => {
        if (!topic) {
            return;
        }
        const fetchTopicWords = async () => {
            try {
                const response = await axios.get(`https://senior-capstone2024-backend.vercel.app/words?topic=${topic}`); //Uses query String
                console.log(response, response.data);
                setWordData(response.data); //.data is where the actual values are stored.
            } catch (error) {
                console.error('Error fetching words', error);
            };
        };
        fetchTopicWords();
    }, [topic]);

    useEffect(() => {
        if (wordData.length === 0) {
            console.log('returning, no words found!');
            return;
        }
        if (allWords.length !== 0) {
            setAllWords([]);
        }
        wordData.map(data => {
            setAllWords(prevWords => {
                return [...prevWords, data.word];
            })
            // console.log('added');
            // wordsArray.push(data.word);
            // console.log(wordsArray);
        })
        // console.log(wordsArray);
    }, [wordData]);
    //For each word collected, add it to a new array\

    console.log(allWords);
    console.log(difficulty);


    // //When difficulty is changed, iterates through the values in wordsArray and tracks the number of characters in each word.
    // //Checks if the number of characters in the array is within the acceptable charactersRange array for this particular difficulty.
    // //If the word fits the character eligibility, push to an array that represents eligible words to use.
    useEffect(() => {
        if (!difficulty || allWords.length === 0) {
            console.log('returning');
            return;
        }
        const findEligibleWords = () => {
            const wordsToCheck = allWords; //Words to iterate over
            const eligibleWords = []; //Word that contains the appropriate length requirement.

            if (difficulty === 'Easy') {
                wordsToCheck.forEach(word => {
                    console.log(word);
                    const eligible = charactersRangeEasy.includes(word.length);
                    if (eligible) {
                        eligibleWords.push(word)
                    };
                });
            } else if (difficulty === 'Intermediate') {
                wordsToCheck.forEach(word => {
                    const eligible = charactersRangeIntermediate.includes(word.length);
                    if (eligible) {
                        eligibleWords.push(word)
                    };
                });
            } else if (difficulty === 'Difficult' || 'Expert') {
                wordsToCheck.forEach(word => {
                    const eligible = charactersRangeDifficultandExpert.includes(word.length);
                    if (eligible) {
                        eligibleWords.push(word)
                    };
                });
            } else {
                console.log('No difficulty selected');
            };
            setUsableWords(eligibleWords); //Sets the state
        };
        findEligibleWords(); //Calls function
    }, [difficulty, allWords])

    console.log(usableWords);

    // //When the number of usable words changes, record the number of
    // //useable words in the state variable. This will be used to iterate
    // //over the array to find a random value.
    useEffect(() => {
        if (usableWords.length === 0) {
            return;
        }
        setUsableWordsArrayLength(usableWords.length);
    }, [usableWords]);

    // // //Initializes the random number generator.
    function randomIntGenerator(maxInt) {
        return (Math.floor(Math.random() * maxInt));
    };

    useEffect(() => {
        if (usableWords.length === 0) {
            return;
        }
        const chooseWords = () => {
            let wordsToChooseFrom = usableWords;
            let numberOfWordsLeftToChoose;
            const chosenWords = [];

            //Sets the number of words to choose.

            switch (difficulty) {
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

            //         //Every time the number of number of of eligible words changes, 
            //         //sets a counter and gets the value of words currently eligible to use. No need to
            //         //reset every time the array changes because it will use the same numbers.
            //         //Chooses a random number between 0 and the number of words eligible and 
            //         //finds the value of the word in the generated index in the eligible words.
            //         //Add the word to the chosen words list and reset the eligible words list to
            //         //disclude the chosen value.
            //         //Decrease the number of words left to choose and continue until the number of words left
            //         //to choose is 0. Uses state to set the chosen words.
            while (numberOfWordsLeftToChoose > 0) {
                const wordsToChooseFromLength = wordsToChooseFrom.length;
                const randomIndex = randomIntGenerator(wordsToChooseFromLength);
                const wordToBeAdded = wordsToChooseFrom[randomIndex];
                chosenWords.push(wordToBeAdded);
                wordsToChooseFrom = wordsToChooseFrom.filter(word => word !== wordToBeAdded);
                numberOfWordsLeftToChoose--;
            };
            setChosenWords(chosenWords);
        };
        chooseWords();
    }, [usableWords, runAgain])

    console.log(chosenWords);

    useEffect(() => {
        if (chosenWords.length === 0) {
            return;
        }
        chosenWords.forEach(word => {
            for (let i = 0; i < word.length; i++) {
                lettersArray.add(word[i]);
            };
        });
        console.log(lettersArray);

        const createLettersArray = () => {
            const eligibleLetters = [];

            lettersArray.forEach(letter => eligibleLetters.push(letter));

            console.log(eligibleLetters);

            return(eligibleLetters);

        }

        setUsableLetters(createLettersArray());

    }, [chosenWords, runAgain]);

    function createPuzzleTemplate(size) {
        const puzzleStorage = [];
        const possibleCoordinates = [];
        const coordinateDirections = [];

        for (let i = 0; i < size; i++) {
            const arr = [];
            for (let j = 0; j < size; j++) {
                arr.push(0);
                const index = [i, j];
                possibleCoordinates.push(index);
                coordinateDirections.push([0]);
            };
            puzzleStorage.push(arr);
        };
        return [puzzleStorage, possibleCoordinates, coordinateDirections];
    };



    useEffect(() => {
        if (!difficulty) {
            return;
        }
        function generateEmptyPuzzle() {
            let puzzle;
            let coords;
            let coordinateDirections;

            switch (difficulty) {
                case 'Easy':
                    [puzzle, coords, coordinateDirections] = createPuzzleTemplate(sizeOfEasy);
                    break;
                case 'Intermediate':
                    [puzzle, coords, coordinateDirections] = createPuzzleTemplate(sizeOfIntermediate);
                    break;
                case 'Difficult':
                case 'Expert':
                    [puzzle, coords, coordinateDirections] = createPuzzleTemplate(sizeOfDiffExp);
                    break;
                default:
                    console.log('No difficulty chosen. Cannot generate puzzle size.');
            };

            console.log(puzzle);
            console.log(coords);
            console.log(coordinateDirections);

            setWorkingPuzzle(puzzle);
            setPuzzleCoords(coords);
            setCoordDirections(coordinateDirections);
        };

        generateEmptyPuzzle();

    }, [difficulty, runAgain])

    function chooseDirection(eligibleDirections) {
        if (!eligibleDirections || eligibleDirections.length === 0) {
            return;
        }
        const direction = randomIntGenerator(eligibleDirections.length);
        return (eligibleDirections[direction]);
    };

    function chooseStartingPoint(coords) {
        if (!coords || coords.length === 0) {
            return;
        }
        const randomIndex = randomIntGenerator(coords.length);

        return (coords[randomIndex]);
    };


    function getIndexValue(coordsList, newCoord) {
        let index = -1;

        for (let i = 0; i < coordsList.length; i++) {
            if (coordsList[i][0] === newCoord[0] && coordsList[i][1] === newCoord[1]) {
                index = i;
            }
        }
        return (index);
    };



    // // //Beginning: Create puzzle & coords. Choose starting location. Choose direction.
    // // //Check to make sure constraints fit. If they do, add word. If they don't, regenerate direction.
    // // //If word is placed in that location, get indicies for letters and add the directions to the index
    // // //specified for the index the direction is placed.

    // // //After: Choose starting location & direction. Check to make sure constraints fit.
    // // //Check to make sure for each letter for the word, ensure the letter isn't placed with
    // // //a direction going the same way or opposite way.
    // // //Re-generate direction, then location if needed.

    function checkConstraints(wordLength, direction, startingPoint, coordinateArray, directionsArray, coordDirections) {
        if (!direction || !startingPoint || !coordinateArray || !directionsArray || !coordDirections || coordDirections.length === 0) {
            return;
        }

        const firstCoordinate = startingPoint[0];
        const secondCoordinate = startingPoint[1];
        let opposite;


        const constraintsArray = [];

        switch (direction) {
            case 'north':
                opposite = 'south';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate - i, secondCoordinate];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    //console.log(coordinateArray);
                    if (newCoordinateIndex !== -1) {
                        //console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        console.log(directionsOfCoordinate);
                        if (!directionsOfCoordinate.includes('north') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            //check available array, if false is contained, then regenerate direction
            case 'northeast':
                opposite = 'southwest';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate - i, secondCoordinate + i];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    //console.log(coordinateArray);
                    if (newCoordinateIndex !== -1) {
                        //console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if (!directionsOfCoordinate.includes('northeast') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'east':
                opposite = 'west';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate, secondCoordinate + i];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    //console.log(coordinateArray);
                    if (newCoordinateIndex !== -1) {
                        //console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if (!directionsOfCoordinate.includes('east') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'southeast':
                opposite = 'northwest';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate + i, secondCoordinate + i];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    //console.log(coordinateArray);
                    if (newCoordinateIndex !== -1) {
                        //console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if (!directionsOfCoordinate.includes('southeast') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'south':
                opposite = 'north';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate + i, secondCoordinate];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    if (newCoordinateIndex !== -1) {
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        console.log(directionsOfCoordinate);
                        if (!directionsOfCoordinate.includes('south') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'southwest':
                opposite = 'northeast';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate + i, secondCoordinate - i];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    //console.log(coordinateArray);
                    if (newCoordinateIndex !== -1) {
                        //console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if (!directionsOfCoordinate.includes('southwest') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'west':
                opposite = 'east';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate, secondCoordinate - i];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    //console.log(coordinateArray);
                    if (newCoordinateIndex !== -1) {
                        //console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        console.log(directionsOfCoordinate);
                        if (!directionsOfCoordinate.includes('west') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'northwest':
                opposite = 'southeast';
                for (let i = 0; i < wordLength; i++) {
                    let available = false;
                    const newCoordinate = [firstCoordinate - i, secondCoordinate - i];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinateIndex);
                    //console.log(coordinateArray);
                    if (newCoordinateIndex !== -1) {
                        //console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if (!directionsOfCoordinate.includes('northwest') && !directionsOfCoordinate.includes(opposite)) {
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            default:
                console.log('No direction found.');
                break;
        };

        console.log(constraintsArray);
        return (!constraintsArray.includes(false));
    };

    function addDirection(direction, storedPuzzleDirections, indexToChange) {
        if (!direction || !storedPuzzleDirections || storedPuzzleDirections.length === 0 || !indexToChange) {
            return;
        }
        console.log(indexToChange);
        storedPuzzleDirections[indexToChange].push(direction);
        setCoordDirections(storedPuzzleDirections);
    };

    function checkLetterCrossingWorks(letter, workingPuzzleArray, row, column) {
        if (!letter || !workingPuzzleArray || workingPuzzleArray.length === 0 || !row || !column) {
            return;
        }

        let isPlaceable = false;

        const existingLetter = workingPuzzleArray[row][column];
        console.log(letter);
        console.log(existingLetter);

        if (existingLetter === 0 || letter === existingLetter) {
            isPlaceable = true;
        }

        return (isPlaceable);
    }

    function checkLetterPlacement(currentPuzzle, direction, startingPoint, word) {
        if (!currentPuzzle || currentPuzzle.length === 0 || !direction || !startingPoint || startingPoint.length === 0) {
            return;
        }

        const wordLength = word.length;

        const startingRow = startingPoint[0];
        const startingColumn = startingPoint[1];

        const workingArray = [];

        switch (direction) {
            case 'north':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow - i, startingColumn));
                };
                console.log(workingArray);
                break;
            case 'northeast':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow - i, startingColumn + i));
                };
                console.log(workingArray);
                break;
            case 'east':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    const newColumn = startingColumn + i;
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow, newColumn));
                };
                console.log(workingArray);
                break;
            case 'southeast':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow + i, startingColumn + i));
                };
                console.log(workingArray);
                break;
            case 'south':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow + i, startingColumn));
                };
                console.log(workingArray);
                break;
            case 'southwest':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow + i, startingColumn - i));
                };
                console.log(workingArray);
                break;
            case 'west':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow, startingColumn - i));
                };
                console.log(workingArray);
                break;
            case 'northwest':
                for (let i = 0; i < wordLength; i++) {
                    const newLetter = word[i];
                    console.log(newLetter);
                    workingArray.push(checkLetterCrossingWorks(newLetter, currentPuzzle, startingRow - i, startingColumn - i));
                };
                console.log(workingArray);
                break;
            default:
                console.log('No direction found.');
                break;
        }

        console.log(!workingArray.includes(false));
        return (!workingArray.includes(false));
    }

    function placeWord(word, direction, startingCoord, coordinateArray, puzzleArray) {

        if (!word || !direction || !startingCoord || startingCoord.length === 0 || !puzzleArray || puzzleArray.length === 0) {
            return;
        }

        console.log(word);

        let tempArray = puzzleArray;


        const wordLength = word.length;

        const startingRow = startingCoord[0];
        const startingColumn = startingCoord[1];

        switch (direction) {
            case 'north':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow - i][startingColumn] = word[i];
                    //SPREAD THIS DOWN TO PUT IN DIRECTIONS
                    const coordPosition = getIndexValue(coordinateArray, [startingRow - i, startingColumn]);
                    addDirection('north', coordDirections, coordPosition);
                };
                break;
            case 'northeast':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow - i][startingColumn + i] = word[i];
                    const coordPosition = getIndexValue(coordinateArray, [startingRow - i, startingColumn + i]);
                    addDirection('northeast', coordDirections, coordPosition);
                };
                break;
            case 'east':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow][startingColumn + i] = word[i];
                    const coordPosition = getIndexValue(coordinateArray, [startingRow, startingColumn + i]);
                    addDirection('east', coordDirections, coordPosition);
                };
                break;
            case 'southeast':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow + i][startingColumn + i] = word[i];
                    const coordPosition = getIndexValue(coordinateArray, [startingRow + i, startingColumn + i]);
                    addDirection('southeast', coordDirections, coordPosition);
                };
                break;
            case 'south':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow + i][startingColumn] = word[i];
                    const coordPosition = getIndexValue(coordinateArray, [startingRow + i, startingColumn]);
                    addDirection('south', coordDirections, coordPosition);
                };
                break;
            case 'southwest':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow + i][startingColumn - i] = word[i];
                    const coordPosition = getIndexValue(coordinateArray, [startingRow + i, startingColumn - i]);
                    addDirection('southwest', coordDirections, coordPosition);
                };
                break;
            case 'west':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow][startingColumn - i] = word[i];
                    const coordPosition = getIndexValue(coordinateArray, [startingRow, startingColumn - i]);
                    addDirection('west', coordDirections, coordPosition);
                };
                break;
            case 'northwest':
                for (let i = 0; i < wordLength; i++) {
                    tempArray[startingRow - i][startingColumn - i] = word[i];
                    const coordPosition = getIndexValue(coordinateArray, [startingRow - i, startingColumn - i]);
                    addDirection('northwest', coordDirections, coordPosition);
                };
                break;
            default:
                console.log('No direction found.');
                break;
        }

        for (let i = 0; i < tempArray.length; i++) {
            console.log(tempArray[i]);
        }

        for (let i = 0; i < coordDirections.length; i++) {
            console.log(coordDirections[i]);
        }

        setWorkingPuzzle(tempArray);
        setCoordDirections(coordDirections);
    }

    function generateWorkingCoordinates(word, currentPuzzleCoords, establishedDirections, currentCoordDirections, currentWorkingPuzzle) {
        if(!word || !currentPuzzleCoords || currentPuzzleCoords.length === 0 || !establishedDirections || establishedDirections.length === 0 || !currentCoordDirections || currentCoordDirections.length === 0 || !currentWorkingPuzzle || currentWorkingPuzzle.length === 0){
            return [false, false, false];
        }

        let works = false;

        const chosenStartingPoint = chooseStartingPoint(currentPuzzleCoords);
        console.log("chosenStartingPoint " + chosenStartingPoint);

        const chosenDirection = chooseDirection(establishedDirections);
        console.log("chosenDirection " + chosenDirection);

        if(checkConstraints(word.length, chosenDirection, chosenStartingPoint, currentPuzzleCoords, establishedDirections, currentCoordDirections)){
            if(checkLetterPlacement(currentWorkingPuzzle, chosenDirection, chosenStartingPoint, word)){
                works = true;
            }
        }

        return[works, chosenStartingPoint, chosenDirection];
    }

    function removeIndex(array, value){
        const newArray = array.filter(indexValue => indexValue !== value);
        return(newArray);
    };

    function resetDirections(){
        const fullDirections = directions;
        return(fullDirections)
    }

    function createPuzzle(chosenPuzzleWords, initialPuzzleCoords, initialWorkingPuzzle) {

        if (!chosenPuzzleWords || chosenPuzzleWords.length === 0 || !initialPuzzleCoords || initialPuzzleCoords.length === 0 || !initialWorkingPuzzle || initialWorkingPuzzle.length === 0) {
            return;
        }

        console.log(chosenPuzzleWords);
        
        const copyWords = () => {

            const tempArray = [];
            for(let i = 0; i < chosenPuzzleWords.length; i++){
                tempArray.push([...chosenPuzzleWords[i]]);
            }

            return(tempArray);
        }

        const wordsToUse = copyWords();

        const copyDirections = () => {

            const tempArray = [...directions];

            return(tempArray);
        }

        const copyCoords = () => {

            const tempArray = [];
            for(let i = 0; i < initialPuzzleCoords.length; i++){
                tempArray.push([...initialPuzzleCoords[i]]);
            }

            return(tempArray);
        }

        let usableDirections = copyDirections();
        let usablePuzzleCoords = copyCoords();

        for(let i = 0; i < wordsToUse.length; i++){

            let word = wordsToUse[i];

            let workingCoord;
            let chosenStart;
            let chosenDirection;

            do{
                [workingCoord, chosenStart, chosenDirection] = generateWorkingCoordinates(word, usablePuzzleCoords, usableDirections, coordDirections, initialWorkingPuzzle);
                if(workingCoord){
                    placeWord(word, chosenDirection, chosenStart, usablePuzzleCoords, initialWorkingPuzzle);
                    continue;
                }else if(usableDirections.length !== 0 && usablePuzzleCoords.length !== 0){
                    usableDirections = removeIndex(usableDirections, chosenDirection);
                }else if(usableDirections.length === 0 && usablePuzzleCoords.length !== 0){
                    usableDirections = resetDirections();
                    usablePuzzleCoords = removeIndex(usablePuzzleCoords, chosenStart);
                }else if(usableDirections.length === 0 && usablePuzzleCoords.length === 0){
                    console.log(word + " could not be placed! Continuing without the word.");
                    continue;
                }

            } while(!workingCoord)
        }

        for (let i = 0; i < initialWorkingPuzzle.length; i++) {
            console.log(initialWorkingPuzzle[i]);
        }
    }

    function createAnswerKey(generatedPuzzle){
        if(!generatedPuzzle || generatedPuzzle.length === 0){
            return;
        }

        const copyPuzzle = () => {

            const tempArray = [];
            for(let i = 0; i < generatedPuzzle.length; i++){
                tempArray.push([...generatedPuzzle[i]]);
            }

            return(tempArray);
        }

        let inProgAnswerKey = copyPuzzle();

        for(let i = 0; i < inProgAnswerKey[0].length; i++){
            for(let j = 0; j < inProgAnswerKey[1].length; j++){
                if(inProgAnswerKey[i][j] === 0){
                    inProgAnswerKey[i][j] = " ";
                }
            }
        }

        for (let i = 0; i < inProgAnswerKey.length; i++) {
            console.log(inProgAnswerKey[i]);
        }

        // setAnswerKey(inProgAnswerKey);

        for (let i = 0; i < answerKey.length; i++) {
            console.log(answerKey[i]);
        }

        return(inProgAnswerKey);
    }

    function createFinalPuzzle(generatedPuzzle){
        if(!generatedPuzzle || generatedPuzzle.length === 0){
            return;
        }

        const copyPuzzle = () => {

            const tempArray = [];
            for(let i = 0; i < generatedPuzzle.length; i++){
                tempArray.push([...generatedPuzzle[i]]);
            }

            return(tempArray);
        }

        const inProgFinalPuzzle = copyPuzzle();


        console.log(usableLetters);

        for(let i = 0; i < inProgFinalPuzzle[0].length; i++){
            for(let j = 0; j < inProgFinalPuzzle[1].length; j++){
                if(inProgFinalPuzzle[i][j] === 0){
                    const randomLetterIndex = randomIntGenerator(usableLetters.length);
                    console.log(randomLetterIndex)
                    inProgFinalPuzzle[i][j] = usableLetters[randomLetterIndex];
                }
            }
        }

        for (let i = 0; i < inProgFinalPuzzle.length; i++) {
            console.log(inProgFinalPuzzle[i]);
        }

        for (let i = 0; i < puzzle.length; i++) {
            console.log(puzzle[i]);
        }

        return(inProgFinalPuzzle);
    }

    function createFinalProduct(){
        if(!topic || !difficulty){
            return;
        }
        console.log(chosenWords);
        createPuzzle(chosenWords, puzzleCoords, workingPuzzle);
        const finalAnswers = createAnswerKey(workingPuzzle);
        const finalPuzzle = createFinalPuzzle(workingPuzzle);
        const finalChosenWords = chosenWords;
        console.log(finalChosenWords);

        return[finalAnswers, finalPuzzle, finalChosenWords];
    }

    return (
        <PuzzleGeneratorPageButton onClick={() => {
            setRunAgain(!runAgain);
            const[answerKey, finalPuzzle, finalChosenWords] = createFinalProduct();
            callback(finalPuzzle);
            puzzleWordsCallback(finalChosenWords);
        }} size='lg'>Generate Puzzle</PuzzleGeneratorPageButton>
    );
};
export default GenerateButton;