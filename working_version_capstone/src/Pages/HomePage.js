import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuContainer from '../Components/HomePage/MenuContainer';
import PuzzlePicture from '../Components/HomePage/PuzzlePicture';
import { StyledContainer, StyledMenuCol, PhotoCol } from './HomePageComponentStyle';

function HomePage() {
    return(
        <StyledContainer>
            <Row className='pt-3 px-2'>
                <h1>Home Page</h1>
            </Row>
            <Row className='my-5'>
                <Col className='col-sm-1'/>
                <StyledMenuCol className='col-sm-4'>
                    <MenuContainer />
                </StyledMenuCol>
                <Col className='col-sm-2'/>
                <PhotoCol className='col-sm-4 d-flex align-items-center justify-content-center'>
                    <PuzzlePicture />
                </PhotoCol>
                <Col className='col-sm-1'/>
            </Row>
        </StyledContainer>
        // mx-4 mb-5'
    );
}
export default HomePage;