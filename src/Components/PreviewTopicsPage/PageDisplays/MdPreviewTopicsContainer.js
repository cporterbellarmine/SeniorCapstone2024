// Used in /src/Pages/ViewTopics

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdNavButtonRouting from '../Components/Buttons/MdNav/MdNavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import WordsPreviewTable from '../Components/DatabaseDisplays/WordsPreviewTable';
import TopicsBackgroundHalf from '../../Images/TopicsBackgroundHalf.png';
import { MdMainContainerBackground, SubCol, ButtonCol, DividerDiv } from '../PreviewTopicsCompStyling';
import './display.css';

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
                        <DividerDiv className='border-bottom'>
                        </DividerDiv>
                    </Row>
                    <Row>
                        <SubCol className='p-3'>
                            <Row>
                                <h3>Choose a Topic</h3>
                            </Row>
                            <Row className='px-3'>
                                <TopicsListChoose callback={setTopic} />
                            </Row>
                        </SubCol>
                        <SubCol className='p-3'>
                            <Row>
                                <h3>Associated Words</h3>
                            </Row>
                            <Row className='px-3 flex-grow-1'>
                                <WordsPreviewTable topic={topic}/>
                            </Row>
                        </SubCol>
                    </Row>
                    <Row>
                        <ButtonCol>
                            <MdNavButtonRouting />
                        </ButtonCol>
                        
                    </Row>
                    <Row>
                        <></>
                    </Row>
                </Col>
            </Row>
        </MdMainContainerBackground>
    );
};
export default MdPreviewTopicsContainer;