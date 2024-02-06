// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuContainer from '../MenuContainer';
import PuzzlePicture from '../PuzzlePicture';
import LogoSmaller from '../../Images/LogoSmaller.png';
import { StyledContainer, StyledMenuCol, PhotoCol, XsTitleRow, MdTitleRow } from './HomePageComponentStyle';

function HomePage() {
    return(
        <StyledContainer>
            <Row className='m-3'>

                <Col>
                    <Row className='p-2 order-first'>
                        <h1>Home Page</h1>
                    </Row>
                    <Row className='flex-grow-1'>
                        <Col>
                            <Row className='p-1 align-items-center'>
                                {/* <Col className='' /> */}
                                <StyledMenuCol className=''>
                                    <MenuContainer />
                                </StyledMenuCol>
                                {/* <Col className='' />
                                <Col className='' /> */}
                                <PhotoCol className='p-3'>
                                    <PuzzlePicture />
                                </PhotoCol>
                                {/* <Col className='' /> */}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                {/* <Col className='col-12 order-2 col-md-5 d-flex'>
                    <Row className='align-items-center'>
                        <Col className='order-first col-1 d-md-none' />
                        <PhotoCol className='p-3 order-2 col-10 order-md-first col-md-12'>
                            <PuzzlePicture />
                        </PhotoCol>
                        <Col className='order-3 col-1 d-md-none' />
                    </Row>
                </Col> */}
                
                {/* <Col className='d-flex order-3 order-md-first col-md-7'>
                    <Row className='flex-grow-1'>
                        <Col>
                            <Row className='p-1 align-items-center'>
                                <Col className='order-first col-1' />
                                <StyledMenuCol className='order-2 col-10'>
                                    <MenuContainer />
                                </StyledMenuCol>
                                <Col className='order-3 col-1' />
                            </Row>
                        </Col>
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
                </Col> */}
            </Row>
        </StyledContainer>
    );
}
export default HomePage;