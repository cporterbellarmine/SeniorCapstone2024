// Used in /src/Pages/ViewTopics

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import XsNavButtonRouting from '../Components/Buttons/XsNav/XsNavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import XsWordsPreviewTable from '../Components/DatabaseDisplays/XsWordsPreviewTable';
import TopicsBackgroundHalf from '../../Images/TopicsBackgroundHalf.png';
import { XsMainContainerBackground,XsBottomCol, ButtonCol, DividerDiv, XsButtonCol } from '../PreviewTopicsCompStyling';
import './display.css';

const XsPreviewTopicsContainer = () => {

    const [topic, setTopic] = useState('');

    return(
        <XsMainContainerBackground>
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
                        <XsButtonCol>
                            <XsNavButtonRouting />
                        </XsButtonCol>
                    </Row>
                    <Row>
                        <XsBottomCol className='p-3'>
                            <Row>
                                <h3>Choose a Topic</h3>
                            </Row>
                            <Row className='px-3'>
                                <TopicsListChoose callback={setTopic} />
                            </Row>
                            <Row>
                                <br />
                            </Row>
                            <Row>
                                <h3>Associated Words</h3>
                            </Row>
                            <Row className='px-3 flex-grow-1'>
                                <XsWordsPreviewTable topic={topic}/>
                            </Row>
                        </XsBottomCol>
                    </Row>
                    <Row>
                        <></>
                    </Row>
                </Col>
            </Row>
        </XsMainContainerBackground>
    );
};
export default XsPreviewTopicsContainer;