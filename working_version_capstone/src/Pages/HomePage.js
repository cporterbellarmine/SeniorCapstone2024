import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StyledContainer, PaddedRow, PhotoCol } from './HomePageComponentStyle';
import MenuContainer from '../Components/HomePage/MenuContainer';
import PuzzlePicture from '../Components/HomePage/PuzzlePicture';

function HomePage() {
    return(
        <StyledContainer>
            <Row>
                <h1>Home Page</h1>
            </Row>
            <Row>
                <Col>
                    <Container>
                        <MenuContainer />
                    </Container>
                    
                </Col>
                <PhotoCol className='d-flex align-items-center justify-content-center'>
                    <Container>
                        <PuzzlePicture />
                    </Container>
                    
                </PhotoCol>
            </Row>
        </StyledContainer>
    );
}
export default HomePage;