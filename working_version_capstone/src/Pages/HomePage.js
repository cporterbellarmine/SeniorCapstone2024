import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuContainer from '../Components/HomePage/MenuContainer';
import PuzzlePicture from '../Components/HomePage/PuzzlePicture';
import { StyledContainer, StyledMenuCol, PhotoCol } from './HomePageComponentStyle';

function HomePage() {
    return(
        <StyledContainer>
            <Row className='m-3'>
                
                <Col className='col-6 col-md-7'>
                    <Row className='p-2'>
                        <h1>Home Page</h1>
                    </Row>
                    <Row className='p-1'>
                        <Col className='col-1' />
                        <StyledMenuCol className='col-10'>
                            <MenuContainer />
                        </StyledMenuCol>
                        <Col className='col-1' />
                    </Row>
                </Col>
                <Col className='col-6 col-md-5 p-3'>
                    <Row className=''>
                        <PhotoCol className='10 p-3'>
                            <PuzzlePicture />
                        </PhotoCol>
                    </Row>
                </Col>
            </Row>
        </StyledContainer>
    );
}
export default HomePage;