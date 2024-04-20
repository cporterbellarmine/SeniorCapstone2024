// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage


//Determines the words to be used in the puzzle and creates the actual puzzle
//format when the 'Generate' button is called.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PuzzleGeneratorPageButton } from './FunctionButtonStyling';

//Topic is passed down from /PuzzleGeneratorPage/PageDisplays/MdGeneratorPage
//and set in /PuzzleGeneratorPage/Components/Dropdowns/TopicDropdown. This is
//used to query the database for words associated with a particular topic.

//Difficulty is passed down from \PuzzleGeneratorPage\PageDisplays\MdGeneratorPage
//and set in \PuzzleGeneratorPage\Components\Dropdowns\DifficultyDropdown and
//reset in \PuzzleGeneratorPage\Components\Dropdowns\TopicDropdown. This is used
//to set the difficulty chosen for the puzzle.

//Callback is passed down from /PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
//and is used to set the final puzzle object in \PuzzleGeneratorPage\Components\DisplayContainers\PreviewDisplay.

const GenerateButton = ({ topic, callback, difficulty }) => {

    // Set State Hooks
    const[wordData, setWordData] = useState([]); //Used to gather data from database.
    const[allWords, setAllWords] = useState([]);
    const[usableWords, setUsableWords] = useState([]); //Used to store words that comply with the chosen difficulty
    const[usableWordsArrayLength, setUsableWordsArrayLength] = useState(0); //Used to store the number of words that comply with the chosen difficulty
    const[puzzleWords, setPuzzleWords] = useState([]); //Used to store the random words that will be used in the puzzle.
    const[puzzle, setPuzzle] = useState([]); //Used to store the final puzzle.
    const[emptyPuzzle, setEmptyPuzzle] = useState([]);
    const[puzzleCoords, setPuzzleCoords] = useState([]);
    const[coordDirections, setCoordDirections] = useState([]);
    const[runAgain, setRunAgain] = useState(false);


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
        if(!topic){
            return;
        }
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

    useEffect(() => {
        if(wordData.length === 0){
            console.log('returning, no words found!');
            return;
        }
        if(allWords.length !== 0){
            setAllWords([]);
        }
        wordData.map(data => {
            setAllWords(prevWords => {
                return[...prevWords, data.word];
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
        if(!difficulty || allWords.length === 0){
            console.log('returning');
            return;
        }
        const findEligibleWords = () => {
            const wordsToCheck = allWords; //Words to iterate over
            const eligibleWords = []; //Word that contains the appropriate length requirement.

            if(difficulty === 'Easy'){
                wordsToCheck.forEach(word => {
                    console.log(word);
                    const eligible = charactersRangeEasy.includes(word.length);
                    if(eligible) {
                        eligibleWords.push(word)
                    };
                });
            }else if(difficulty === 'Intermediate'){
                wordsToCheck.forEach(word => {
                    const eligible = charactersRangeIntermediate.includes(word.length);
                    if(eligible) {
                        eligibleWords.push(word)
                    };
                });
            }else if(difficulty === 'Difficult' || 'Expert'){
                wordsToCheck.forEach(word => {
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
    }, [difficulty, allWords])

    console.log(usableWords);

    // //When the number of usable words changes, record the number of
    // //useable words in the state variable. This will be used to iterate
    // //over the array to find a random value.
    useEffect(() => {
        if(usableWords.length === 0){
            return;
        }
        setUsableWordsArrayLength(usableWords.length);
    }, [usableWords]);

    // // //Initializes the random number generator.
    function randomIntGenerator(maxInt){
        return(Math.floor(Math.random() * maxInt));
    };

    useEffect(() => {
        if(usableWords.length === 0){
            return;
        }
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

    //         //Every time the number of number of of eligible words changes, 
    //         //sets a counter and gets the value of words currently eligible to use. No need to
    //         //reset every time the array changes because it will use the same numbers.
    //         //Chooses a random number between 0 and the number of words eligible and 
    //         //finds the value of the word in the generated index in the eligible words.
    //         //Add the word to the chosen words list and reset the eligible words list to
    //         //disclude the chosen value.
    //         //Decrease the number of words left to choose and continue until the number of words left
    //         //to choose is 0. Uses state to set the chosen words.
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
    }, [usableWords, runAgain])

    console.log(puzzleWords);

    useEffect(() => {
        if(puzzleWords.length === 0){
            return;
        }
        puzzleWords.forEach(word => {
            for(let i = 0; i < word.length; i++) {
                lettersArray.add(word[i]);
            };
        });
        console.log(lettersArray);
    }, [puzzleWords]);

    function createPuzzleTemplate(size){
        const puzzleStorage = [];
        const possibleCoordinates = [];
        const coordinateDirections = [];

        for(let i = 0; i < size; i++){
            const arr = [];
            for(let j = 0; j < size; j++){
                arr.push(0);
                const index = [i,j];
                possibleCoordinates.push(index);
                coordinateDirections.push([]);
            };
            puzzleStorage.push(arr);
        };
        return[puzzleStorage, possibleCoordinates, coordinateDirections];
    };



    useEffect(() => {
        if(!difficulty){
            return;
        }
        function generateEmptyPuzzle(currentDifficulty){
            let puzzle;
            let coords;
            let coordinateDirections;
    
            switch(difficulty){
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

            setEmptyPuzzle(puzzle);
            setPuzzleCoords(coords);
            setCoordDirections(coordinateDirections);
        };

        generateEmptyPuzzle();

    }, [difficulty])

    function chooseDirection(eligibleDirections){
        if(!eligibleDirections || eligibleDirections.length === 0){
            return;
        }
        const direction = randomIntGenerator(eligibleDirections.length);
        return(eligibleDirections[direction]);
    };

    function chooseStartingPoint(coords){
        if(!coords || coords.length === 0){
            return;
        }
        const randomIndex = randomIntGenerator(coords.length);
        
        return(coords[randomIndex]);
    };

    // function setNewCoord(){
    //     if(!puzzleCoords || puzzleCoords.length === 0){
    //         return;
    //     }
    //     console.log(puzzleCoords);
    //     let tempPuzzleCoords = puzzleCoords;
    //     const tempIndex = chooseStartingPoint(puzzleCoords);
    //     tempPuzzleCoords[tempIndex] = 5555;
    //     console.log(tempPuzzleCoords);
    // };
    

    // const chosenDirection = () => {
    //     console.log(emptyPuzzle);
    //     console.log(puzzleCoords);
    //     const dir = chooseDirection(directions);
    //     const randomInd = chooseStartingPoint(puzzleCoords);
    //     console.log(dir);
    //     console.log(randomInd);
    // }

    // chosenDirection();

    function getIndexValue(coordsList, newCoord){
        let index = -1;

        for(let i = 0; i < coordsList.length; i++){
            if(coordsList[i][0] === newCoord[0] && coordsList[i][1] === newCoord[1]){
                index = i;
            }
        }
        return [index];
    };

    // // //Beginning: Create puzzle & coords. Choose starting location. Choose direction.
    // // //Check to make sure constraints fit. If they do, add word. If they don't, regenerate direction.
    // // //If word is placed in that location, get indicies for letters and add the directions to the index
    // // //specified for the index the direction is placed.

    // // //After: Choose starting location & direction. Check to make sure constraints fit.
    // // //Check to make sure for each letter for the word, ensure the letter isn't placed with
    // // //a direction going the same way or opposite way.
    // // //Re-generate direction, then location if needed.

    function checkConstraints(wordLength, direction, startingPoint, coordinateArray, directionsArray, coordDirections){
        if(direction === '' || !startingPoint || !coordinateArray || !directionsArray || !coordDirections){
            return;
        }

        const firstCoordinate = startingPoint[0];
        const secondCoordinate = startingPoint[1];
        let opposite;
        let works = 'false';


        const constraintsArray = [];

        switch(direction){
            case 'north':
                opposite = 'south';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate-i, secondCoordinate];
                    const newCoordinateIndex = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('north' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
                //check available array, if false is contained, then regenerate direction
            case 'northeast':
                opposite = 'southwest';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate-i, secondCoordinate+i];
                    const [newCoordinateContained, newCoordinateIndex] = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(newCoordinateContained);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('northeast' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'east':
                opposite = 'west';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate, secondCoordinate+i];
                    const [newCoordinateContained, newCoordinateIndex] = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(newCoordinateContained);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('east' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'southeast':
                opposite = 'northwest';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate+i, secondCoordinate+i];
                    const [newCoordinateContained, newCoordinateIndex] = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(newCoordinateContained);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('southeast' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'south':
                opposite = 'north';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate+i, secondCoordinate];
                    const [newCoordinateContained, newCoordinateIndex] = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(newCoordinateContained);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('south' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'southwest':
                opposite = 'northeast';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate+i, secondCoordinate-i];
                    const [newCoordinateContained, newCoordinateIndex] = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('southwest' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'west':
                opposite = 'east';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate, secondCoordinate-i];
                    const [newCoordinateContained, newCoordinateIndex] = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(newCoordinateContained);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('west' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            case 'northwest':
                opposite = 'southeast';
                for(let i = 0; i < wordLength; i++){
                    let available = false;
                    const newCoordinate = [firstCoordinate-i, secondCoordinate-i];
                    const [newCoordinateContained, newCoordinateIndex] = getIndexValue(coordinateArray, newCoordinate);
                    console.log(newCoordinate);
                    console.log(newCoordinateContained);
                    console.log(coordinateArray);
                    if(newCoordinateIndex !== -1){
                        console.log(coordDirections);
                        const directionsOfCoordinate = coordDirections[newCoordinateIndex];
                        if(!directionsOfCoordinate.includes('northwest' || opposite)){
                            available = true;
                        }
                    }
                    constraintsArray.push(available);
                };
                break;
            default:
                console.log('No direction found.');
                break;
        }
        return(works);
    };

    function addDirection(direction, storedPuzzleDirections, indexToChange){
        storedPuzzleDirections[indexToChange].push(direction);
        setCoordDirections(storedPuzzleDirections);
    };

    function placeWord(word, direction, startingCoord, puzzleArray){

        if(!word || !direction || !startingCoord || startingCoord.length === 0 || !puzzleArray || puzzleArray.length === 0){
            return;
        }

        console.log(word);

        let tempArray = puzzleArray;


        const wordLength = word.length;

        const startingRow = startingCoord[0];
        const startingColumn = startingCoord[1];

        switch(direction){
            case 'north':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow-i][startingColumn] = word[i];
                    //SPREAD THIS DOWN TO PUT IN DIRECTIONS
                    getIndexValue(coordinateArray, [startingRow-i, startingColumn])
                };
                break;
            case 'northeast':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow-i][startingColumn+i] = word[i];
                };
                break;
            case 'east':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow][startingColumn+i] = word[i];
                };
                break;
            case 'southeast':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow+i][startingColumn+i] = word[i];
                };
                break;
            case 'south':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow+i][startingColumn] = word[i];
                };
                break;
            case 'southwest':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow+i][startingColumn-i] = word[i];
                };
                break;
            case 'west':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow][startingColumn-i] = word[i];
                };
                break;
            case 'northwest':
                for(let i = 0; i < wordLength; i++){
                    tempArray[startingRow-i][startingColumn-i]= word[i];
                };
                break;
            default:
                console.log('No direction found.');
                break;
        }

        for(let i = 0; i < tempArray.length; i++){
            console.log(tempArray[i]);
        }
    }

    function checkWord(){

        if(!puzzleWords || puzzleWords.length === 0 || !puzzleCoords || puzzleCoords.length === 0){
            return;
        }

        const chosenDirection = chooseDirection(directions);
        console.log("chosenDirection " + chosenDirection);

        console.log(puzzleCoords);

        const chosenStartingPoint = chooseStartingPoint(puzzleCoords);
        console.log("chosenStartingPoint " + chosenStartingPoint);

        const word = puzzleWords[0];

        console.log("word " + word);

        let tempPuzzle = emptyPuzzle;

        if(checkConstraints(word.length, chosenDirection, chosenStartingPoint, puzzleCoords, directions, coordDirections)){
            placeWord(word, chosenDirection, chosenStartingPoint, tempPuzzle);
        };

        // for(let i = 0; i < coordDirections.length; i++){
        //     console.log(i + coordDirections[i]);
        // }
    }

    // function generatePotentialIndex(word, chosenDifficulty, chosenIndex, chosenDirection, coordinatesArray, directionArray, coordDirections){
    //     if(!word || !chosenDifficulty || !coordinatesArray || coordinatesArray.length === 0 || !directionArray || directionArray.length === 0 || !coordDirections || coordDirections === 0){
    //         return;
    //     }

    //     let chosenStart;
    //     let chosenDir;

    //     if(!chosenIndex || chosenIndex.length === 0){
    //         chosenStart = chooseStartingPoint(coordinatesArray);
    //     }else{
    //         chosenStart = chosenIndex;
    //     }

    //     if(!chosenDirection){
    //         chosenDir = chooseStartingPoint(directionArray);
    //     }else{
    //         chosenDir = chosenDirection;
    //     }
        
    //     const wordLength = word.length;

    //     console.log('chosenStart = ' + chosenStart);
    //     console.log('chosenDirection = ' + chosenDir);
    //     console.log('wordLength = ' + wordLength);

    //     const potentialIndexWorks = checkConstraints(wordLength, chosenDir, chosenStart, coordinatesArray, directionArray, coordDirections);

    //     return [chosenStart, chosenDir, potentialIndexWorks];
    // }

    // function removeIndex(array, value){
    //     const newArray = array.filter(indexValue => indexValue !== value);
    //     return(newArray);
    // };

    // function resetDirections(){
    //     const fullDirections = directions;
    //     return(fullDirections)
    // }

    // function generateWorkingCoordinates(word, chosenDifficulty, chosenCoord, pickedDirection, coordinatesArray, directionArray, coordDirections, indexWorks){
    //     if(!difficulty || !word || !chosenDifficulty || !coordinatesArray || coordinatesArray.length === 0 || !directionArray || directionArray.length === 0 || !coordDirections || coordDirections === 0){
    //         return;
    //     };

    //     console.log(word);
    //     console.log(chosenDifficulty);

    //     let availableCoordArray = coordinatesArray;
    //     let availableDirectionArray = directionArray;

    //     let validIndex = [];

    //     if(!indexWorks){
    //         if(availableDirectionArray.length !== 0){
    //             console.log(`Chosen direction does not work. Removing ${pickedDirection}`);
    //             availableDirectionArray = availableDirectionArray.filter(direction => direction !== pickedDirection);
    //         }
    //         else if(availableDirectionArray.length === 0 && availableCoordArray!== 0){
    //             console.log(`Chosen starting point does not work. Removing ${chosenCoord}`);
    //             availableDirectionArray = resetDirections();
    //             pickedDirection = null;
    //             availableCoordArray = availableCoordArray.filter(coord => coord !== chosenCoord);
    //             chosenCoord = null;
    //         }
    //         else{
    //             console.log('Error');
    //         }


    //         [chosenCoord, pickedDirection, indexWorks] = generatePotentialIndex(word, chosenDifficulty, chosenCoord, pickedDirection, coordinatesArray, directionArray, coordDirections);
    //         [chosenCoord, chosenDifficulty, pickedDirection] = generateWorkingCoordinates(word, chosenDifficulty, chosenCoord, pickedDirection, coordinatesArray, directionArray, coordDirections, indexWorks);

    //     }else if(indexWorks){

    //         console.log(`Success! Chosen index is ${chosenCoord} and chosen direction is ${pickedDirection}`);

    //     }else{
    //         console.log('error');
    //     }

    //     return[chosenCoord, chosenDifficulty, pickedDirection];


        // console.log('working index ln 528' + workingIndex);

        // // while(!workingIndex){
        //     chosenStart = chooseStartingPoint(workingCoordArray);
        //     console.log('chosenStart is: ' + chosenStart);
        //     chosenDirection = chooseDirection(workingDirectionArray);
        //     console.log('chosenDirection is: ' + chosenDirection);

        //     const potentialIndex  = checkConstraints(wordLength, chosenDirection, chosenStart, workingCoordArray, workingDirectionArray, workingCoordDirections);
        //     console.log('potentialIndex is: ' + potentialIndex);

        //     if(potentialIndex){
        //         console.log('index found. returning!');
        //         workingIndex = true;
        //         return [chosenStart, chosenDirection];
        //     }else{
        //         if(workingDirectionArray.length !== 0){
        //             //removes current direction
        //             console.log(`{chosenDirection} does not work! Removing from direction array.`);
        //             workingDirectionArray = workingDirectionArray.filter(direction => direction !== chosenDirection);
        //             console.log(workingDirectionArray);
        //         }else if(workingDirectionArray.length === 0){
        //             workingCoordArray = workingCoordArray.filter(coord => coord !== chosenStart);
        //             workingDirectionArray = directionArray;
        //             console.log(`Working direction changed. {chosenStart} removed. {workingDirectionArray}`);
        //         }
        //     }
            
    //     // // }
    // };

    //generateWorkingCoordinates('supercalifragilisticexpialidocious', 'easy', [], '', puzzleCoords, directions, coordDirections, null);

    // if(topic && difficulty){
    //     console.log(generateStartandDirection(3, puzzleCoords, directions, coordDirections));
    // }
    

    // const loopWorks = () => {
    //     // console.log(emptyPuzzle);
    //     // console.log(puzzleCoords);
    //     // const dir = chooseDirection(directions);
    //     // const randomInd = chooseStartingPoint(puzzleCoords);
    //     // console.log(dir);
    //     // console.log(randomInd);
    //     // const final = checkConstraints(1, dir, randomInd, puzzleCoords, directions, coordDirections);
    //     // console.log(final);
    //     return(generateStartandDirection(3, puzzleCoords, directions, coordDirections));
    //     // const [startResult, startDirection] = generateStartandDirection(5, puzzleCoords, directions, coordDirections);
    //     // console.log(startResult);
    //     // console.log(startDirection);
    // }

    // const test = loopWorks();

    // function findWordCoordinates(word, givenDifficulty, directionArray){
    //     const [newPuzzle, newCoordinates] = generateEmptyPuzzle(givenDifficulty);
    //     const [workingStart, workingDirection] = generateStartandDirection(word.length, newCoordinates, directionArray);

    //     return [workingStart, workingDirection];
    // }

    // console.log(findWordCoordinates('test', difficulty, directions));



    useEffect(() => {
        if(!puzzleWords || !difficulty){
            return;
        }

         returnValue = puzzleWords;

    }, [puzzleWords, difficulty]);

    useEffect(() => {
        if(!topic || !difficulty){
            return;
        }

        checkWord();
    }, [runAgain]);

    return(
        
        <PuzzleGeneratorPageButton onClick={() => {
            setRunAgain(!runAgain);
            callback(returnValue);
        }} size='lg'>Generate Puzzle</PuzzleGeneratorPageButton>
    );
};
export default GenerateButton;