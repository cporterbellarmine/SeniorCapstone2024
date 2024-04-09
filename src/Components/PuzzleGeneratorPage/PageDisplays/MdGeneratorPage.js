// Used in /src/Pages/PuzzleGeneratorPage

import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdOptionsContainer from './MdOptionsContainer';
import MdPreviewContainer from './MdPreviewContainer';
import PreviewButtonRouting from '../Components/Buttons/NavButtons/PreviewButtonRouting';
import GeneratorBackgroundHalf from '../../Images/GeneratorBackgroundHalf.png';
import { HideMdContainer } from './ViewContainer';
import { PhotoRow, WhiteTitle, InteractiveRow } from './ContainerStyling';

const MdGeneratorPage = () => {

    const[topic, setTopic] = useState(''); //Used to store the chosen topic in the OptionsContainer.
    const[difficulty, setDifficulty] = useState(''); //Used to store the chosen topic in the OptionsContainer.

    return(
        <HideMdContainer>
            <Row>
                <Col>
                    <PhotoRow>
                        <img src={GeneratorBackgroundHalf} className='p-0 m-0' alt='Generator Page Cover Photo'/>
                    </PhotoRow>
                    <Row>
                        <Col className='col-4 align-content-center'>
                            <PreviewButtonRouting />
                        </Col>
                        <Col className='col-5 text-center align-content-center'>
                            <WhiteTitle>Puzzle Generator</WhiteTitle>
                        </Col>
                        <Col className='col-3'>
                            <>
                            </>
                        </Col>
                        
                    </Row>
                    <InteractiveRow className='p-4 d-flex'>
                        <Col>
                            <MdOptionsContainer topicCallback={setTopic} topic={topic} difficultyCallback={setDifficulty} difficulty={difficulty}/>
                        </Col>
                        <Col>
                            <MdPreviewContainer topic={topic} difficulty={difficulty}/>
                        </Col>
                    </InteractiveRow>
                </Col>
                
            </Row>
        </HideMdContainer>
    );
};
export default MdGeneratorPage