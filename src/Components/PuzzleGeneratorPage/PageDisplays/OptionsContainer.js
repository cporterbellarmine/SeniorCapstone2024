// Used in /Components/PuzzleGenerator/PageDisplays/MdGeneratorPage

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Components/Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from '../Components/Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Components/Dropdowns/TopicDropdown';
import GenerateButton from '../Components/Buttons/FunctionButtons/GenerateButton';
import { InstructionsColMd, InstructionsRowTitleMd, InstructionsRowNumbersMd } from './ContainerStyling';
import { InstructionsRowStyled, SubCol } from '../Components/DisplayContainers/PreviewStyledComponents';

const OptionsContainer = ({ topicCallback, topic, difficultyCallback,  difficulty, puzzle, puzzleCallback, puzzleWords, puzzleWordsCallback, answerKeyCallback }) => {

    const[selected, setSelected] = useState('');

    console.log(puzzleWords);

    return(
        <Container>
            <Row>
                <Col>
                    <Row className='order-3 pt-2 pb-4'>
                        <Stack gap={2}>
                            <TopicDropdown topicCallback={topicCallback} difficultyCallback={difficultyCallback} selectedCallback={setSelected}/>
                            <DifficultyDropdown topic={topic} difficultyCallback={difficultyCallback} selectedCallback={setSelected} selected={selected}/>
                        </Stack>
                    </Row>
                </Col>
                <Col className='align-content-center'>
                    <GenerateButton topic={topic} callback={puzzleCallback} difficulty={difficulty} puzzle={puzzle} puzzleWords={puzzleWords} puzzleWordsCallback={puzzleWordsCallback} answerKeyCallback={answerKeyCallback}/>
                </Col>
            </Row>
        </Container>
    );
};
export default OptionsContainer;