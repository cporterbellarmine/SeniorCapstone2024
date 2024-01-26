import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuContainer from '../Components/HomePage/MenuContainer';
import PuzzlePicture from '../Components/HomePage/PuzzlePicture';
import { StyledContainer, StyledMenuCol, PhotoCol } from './HomePageComponentStyle';

function HomePage() {
    return(
        <StyledContainer>
            <Col>
                <Row className='py-2 px-2'>
                    <h1>Home Page</h1>
                </Row>
                <Row className='mb-5 mt-3'>
                    <Col className='col-2 order-first col-md-1' />
                    <StyledMenuCol className='p-3 align-content-center col-8 order-5 col-md-4 order-md-1 col-lg-5 col-xl-5'>
                        <MenuContainer />
                    </StyledMenuCol>
                    <Col className='col-2 order-2 col-md-1 order-md-2 col-lg-1 col-xl-1' />
                    <Col className='col-2 order-3 col-md-1 d-md-none' />
                    <PhotoCol className='p-3 d-flex col-8 col-md-5 order-md-5 col-lg-4 col-xl-4'>
                        <PuzzlePicture />
                    </PhotoCol>
                    <Col className='col-2 order-last col-md-1' />
                </Row>
            </Col>
        </StyledContainer>
    );
}
export default HomePage;