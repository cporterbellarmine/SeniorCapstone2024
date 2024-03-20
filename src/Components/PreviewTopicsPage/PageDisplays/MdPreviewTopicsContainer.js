// Used in /src/Pages/ViewTopics

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdNavButtonRouting from '../Components/Buttons/MdNav/MdNavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import WordsPreviewTable from '../Components/DatabaseDisplays/WordsPreviewTable';
import TopicsBackgroundHalf from '../../Images/TopicsBackgroundHalf.png';
import { MdMainContainerBackground, SubCol } from '../PreviewTopicsCompStyling';

const MdPreviewTopicsContainer = () => {
    const [topic, setTopic] = useState('');

    return(
        <MdMainContainerBackground>
            <Row>
                <Col>
                    <Row>
                        <img src={TopicsBackgroundHalf} className='p-0 m-0' alt='Preview Topics Cover Photo'/>
                    </Row>
                    <Row>
                        <SubCol className='p-3 d-flex'>
                            <Row>
                                <h3>Choose a Topic</h3>
                            </Row>
                            <Row className='p-3 flex-grow-1'>
                                <TopicsListChoose callback={setTopic} />
                            </Row>
                        </SubCol>
                        <SubCol className='p-3 d-flex'>
                            <Row>
                                <h3>Words Associated With Chosen Topic</h3>
                            </Row>
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