// Used in /src/Pages/ViewTopics

import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import XsNavButtonRouting from '../Components/Buttons/XsNav/XsNavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import WordsPreviewTable from '../Components/DatabaseDisplays/WordsPreviewTable';
import { XsMainContainerBackground } from '../PreviewTopicsCompStyling';

const XsPreviewTopicsContainer = () => {
    return(
        <XsMainContainerBackground>
            <Row>
                <Col>
                    <Row className='px-2 pt-2'>
                        <h1>Preview Topics</h1>
                    </Row>
                    <Row>
                        <XsNavButtonRouting />
                    </Row>
                    <Row className='flex-grow-1'>
                        <TopicsListChoose />
                    </Row>
                    <Row className='flex-grow-1'>
                        <WordsPreviewTable />
                    </Row>
                </Col>
            </Row>
        </XsMainContainerBackground>
    );
};
export default XsPreviewTopicsContainer;