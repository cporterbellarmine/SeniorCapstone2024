import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuContainer from '../Components/HomePage/MenuContainer';
import PuzzlePicture from '../Components/HomePage/PuzzlePicture';
import { StyledContainer, StyledMenuCol, PhotoCol } from './HomePageComponentStyle';

function HomePage() {
    return(
        <StyledContainer >
            <Col>
                <Row className='pt-3 px-2'>
                    <h1>Home Page</h1>
                </Row>
                <Row className='mb-5 mt-3'>
                    <Col className='col-1 order-first' />
                    <StyledMenuCol className='col-10 order-5 col-md-5 order-md-1'>
                        <MenuContainer />
                    </StyledMenuCol>
                    <Col className='col-1 order-2 col-md-1 order-md-2' />
                    <Col className='col-1 order-3 d-md-none' />
                    <PhotoCol className='col-10 col-md-4 order-md-3 p-3 d-flex align-items-center'>
                        <PuzzlePicture />
                    </PhotoCol>
                    <Col className='col-1 order-last col-md-1 order-md-4' />
                </Row>
            </Col>
        </StyledContainer>
    );
}
export default HomePage;