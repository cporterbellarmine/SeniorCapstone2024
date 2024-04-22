// Used in /src/Pages/PuzzleGeneratorPage

import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdOptionsContainer from './MdOptionsContainer';
import MdPreviewContainer from './MdPreviewContainer';
import PreviewButtonRouting from '../Components/Buttons/NavButtons/PreviewButtonRouting';
import GeneratorBackgroundHalf from '../../Images/GeneratorBackgroundHalf.png';
import { HideMdContainer } from './ViewContainer';
import { PhotoRow, WhiteTitle, InteractiveRow, InstructionsRowTitleMd, InstructionsRowNumbersMd } from './ContainerStyling';

const MdGeneratorPage = () => {

    const [topic, setTopic] = useState(''); //Used to store the chosen topic in the OptionsContainer.
    const [difficulty, setDifficulty] = useState(''); //Used to store the chosen topic in the OptionsContainer.
    const [puzzle, setPuzzle] = useState(["To display the chosen puzzle words, click Generate."]);
    const [puzzleWords, setPuzzleWords] = useState([]);

    console.log(puzzleWords);

    return (
        <HideMdContainer>
            <Row>
                <Col>
                    <PhotoRow>
                        <img src={GeneratorBackgroundHalf} className='p-0 m-0' alt='Generator Page Cover Photo' />
                    </PhotoRow>
                    <Row>
                        <Col className='col-4 align-content-center'>
                            <PreviewButtonRouting />
                        </Col>
                        <Col className='col-5 text-center align-content-center'>
                            <WhiteTitle>Puzzle Generator</WhiteTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InstructionsRowTitleMd>
                                <h2>Instructions</h2>
                            </InstructionsRowTitleMd>
                            <InstructionsRowNumbersMd>
                                <div>
                                    <ol>
                                        <li>
                                            <p><b>Choose a topic</b> in the 'Click to choose a topic.' dropdown menu.</p>
                                        </li>
                                        <li>
                                            <p><b>Choose a difficulty</b> in the 'Click to choose a difficulty.' dropdown menu.</p>
                                        </li>
                                    </ol>
                                </div>
                            </InstructionsRowNumbersMd>
                        </Col>
                    </Row>
                    <InteractiveRow className='p-4 d-flex'>
                        <Col>
                            <MdOptionsContainer topicCallback={setTopic} topic={topic} difficultyCallback={setDifficulty} difficulty={difficulty} puzzle={puzzle} puzzleCallback={setPuzzle} puzzleWords={puzzleWords} puzzleWordsCallback={setPuzzleWords}/>
                        </Col>
                    </InteractiveRow>
                    <InteractiveRow>
                        <Col>
                            <MdPreviewContainer topic={topic} difficulty={difficulty} puzzle={puzzle} puzzleWords={puzzleWords}/>
                        </Col>
                    </InteractiveRow>
                </Col>
            </Row>
        </HideMdContainer>
    );
};
export default MdGeneratorPage