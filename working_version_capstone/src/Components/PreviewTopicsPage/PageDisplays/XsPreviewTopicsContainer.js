import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import XsNavButtonRouting from '../Components/Buttons/XsNav/XsNavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import WordsPreviewTable from '../Components/DatabaseDisplays/WordsPreviewTable';
import { XsMainContainerBackground, SubCol } from '../PreviewTopicsCompStyling';

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
                        {/* <SubCol className='p-3 d-flex'> */}
                    <Row className='flex-grow-1'>
                        <TopicsListChoose />
                    </Row>
                        {/* </SubCol>
                        <SubCol className='p-3 d-flex'> */}
                    <Row className='flex-grow-1'>
                        <WordsPreviewTable />
                    </Row>
                        {/* </SubCol> */}
                </Col>
            </Row>
        </XsMainContainerBackground>
    );
};
export default XsPreviewTopicsContainer;