import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavButtonRouting from '../Components/Buttons/NavButtonRouting';
import TopicsListChoose from '../Components/DatabaseDisplays/TopicsListChoose';
import WordsPreviewTable from '../Components/DatabaseDisplays/WordsPreviewTable';
import { MainContainerBackground, SubCol } from '../PreviewTopicsCompStyling';

const MdPreviewTopicsContainer = () => {
    return(
        <MainContainerBackground className=''>
            <Row>
                <Col>
                    <Row className='p-3'>
                        <h1>Preview Topics</h1>
                    </Row>
                    <Row className=''>
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
                        <NavButtonRouting />
                    </Row>
                </Col>
            </Row>
        </MainContainerBackground>
    );
};
export default MdPreviewTopicsContainer;