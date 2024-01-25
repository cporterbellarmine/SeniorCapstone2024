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
                <Row className='pt-3 px-2'>
                    <h1>Home Page</h1>
                </Row>
                <Row className='my-5'>
                    <Col className='col-1 order-first'/>
                    <StyledMenuCol className='col-10 order-5 col-sm-4 order-sm-1'>
                        <MenuContainer />
                    </StyledMenuCol>
                    <Col className='col-1 order-2 col-sm-1 order-sm-2'/>
                    <Col className='col-1 order-3 col-sm-1 order-sm-2'/>
                    <PhotoCol className='col-10 col-sm-4 order-sm-3 p-3 d-flex align-items-center'>
                        <PuzzlePicture/>
                    </PhotoCol>
                    <Col className='col-1 order-last col-sm-1 order-sm-4'/>
                </Row>
            </Col>
        </StyledContainer>
        // mx-4 mb-5'
    );
}
export default HomePage;