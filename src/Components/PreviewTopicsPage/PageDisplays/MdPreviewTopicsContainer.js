// Used in /src/Pages/ViewTopics

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdNavButtonRouting from '../Components/Buttons/MdNav/MdNavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import WordsPreviewTable from '../Components/DatabaseDisplays/WordsPreviewTable';
import { MdMainContainerBackground, SubCol } from '../PreviewTopicsCompStyling';

const MdPreviewTopicsContainer = () => {
    const [topic, setTopic] = useState('');

    return(
        <MdMainContainerBackground>
            <Row>
                <Col>
                    <Row className='p-3'>
                        <h1>Preview Topics</h1>
                    </Row>
                    <Row>
                        <SubCol className='p-3 d-flex'>
                            <Row className='p-3 flex-grow-1'>
                                <TopicsListChoose callback={setTopic}/>
                            </Row>
                        </SubCol>
                        <SubCol className='p-3 d-flex'>
                            <Row className='p-3 flex-grow-1'>
                                <WordsPreviewTable topic={topic}/>
                            </Row>
                        </SubCol>
                    </Row>
                    <Row>
                        <MdNavButtonRouting />
                    </Row>
                </Col>
            </Row>
        </MdMainContainerBackground>
    );
};
export default MdPreviewTopicsContainer;