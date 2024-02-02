import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdNavButtonRouting from '../Components/Buttons/MdNav/MdNavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import WordsPreviewTable from '../Components/DatabaseDisplays/WordsPreviewTable';
import { MdMainContainerBackground, SubCol } from '../PreviewTopicsCompStyling';

const MdPreviewTopicsContainer = () => {
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
                                <TopicsListChoose />
                            </Row>
                        </SubCol>
                        <SubCol className='p-3 d-flex'>
                            <Row className='p-3 flex-grow-1'>
                                <WordsPreviewTable />
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