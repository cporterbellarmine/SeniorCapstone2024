// Used in /src/Pages/PuzzleGeneratorPage

import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdOptionsContainer from './MdOptionsContainer';
import MdPreviewContainer from './MdPreviewContainer';
import { HideMdContainer } from './ViewContainer';

const MdGeneratorPage = () => {

    const[topic, setTopic] = useState(''); //Used to store the chosen topic in the OptionsContainer.
    const[difficulty, setDifficulty] = useState(''); //Used to store the chosen topic in the OptionsContainer.

    return(
        <HideMdContainer>
            <Row className='p-4 d-flex'>
                <Col>
                    <MdOptionsContainer callback={setTopic} topic={topic} difficultyCallback={setDifficulty} difficulty={difficulty}/>
                </Col>
                <Col>
                   <MdPreviewContainer topic={topic} difficulty={difficulty}/>
                </Col>
            </Row>
        </HideMdContainer>
    );
};
export default MdGeneratorPage