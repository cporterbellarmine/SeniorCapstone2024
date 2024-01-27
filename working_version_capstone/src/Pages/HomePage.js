import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuContainer from '../Components/HomePage/MenuContainer';
import PuzzlePicture from '../Components/HomePage/PuzzlePicture';
import { StyledContainer, StyledMenuCol, PhotoCol, XsTitleRow, MdTitleRow } from './HomePageComponentStyle';

function HomePage() {
    return(
        <StyledContainer>
            <Row className='m-3 d-flex'>

                <XsTitleRow className='p-2 order-first'>
                    <h1>Home Page</h1>
                </XsTitleRow>

                <Col className='col-12 order-3 order-md-first col-md-7'>
                    <MdTitleRow className='p-2'>
                        <h1>Home Page</h1>
                    </MdTitleRow>
                    <Row className='p-1'>
                        <Col className='order-first col-1' />
                        <StyledMenuCol className='order-2 col-10 d-flex justify-content-center'>
                            <MenuContainer />
                        </StyledMenuCol>
                        <Col className='order-3 col-1' />
                    </Row>
                </Col>
                <Col className='col-12 order-2 col-md-5 d-flex'>
                    <Row className='align-items-center'>
                        <Col className='order-first col-1 d-md-none' />
                        <PhotoCol className='p-3 order-2 col-10 order-md-first col-md-12'>
                            <PuzzlePicture />
                        </PhotoCol>
                        <Col className='order-3 col-1 d-md-none' />
                    </Row>
                </Col>
            </Row>
        </StyledContainer>
    );
}
export default HomePage;