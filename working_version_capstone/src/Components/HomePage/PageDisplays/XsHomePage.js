// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import MenuContainer from '../MenuContainer';
import PuzzlePicture from '../PuzzlePicture';
import LogoLargerBrandDarker from '../../Images/LogoLargerBrandDarker.png';
import { StyledContainer, StyledMenuCol, PhotoCol, XsTitleRow, MdTitleRow } from './HomePageComponentStyle';

function HomePage() {
    return(
        <StyledContainer>
            <Row className='' style={{backgroundColor: 'black'}}>
                <img src={LogoLargerBrandDarker} className='p-2 img-fluid w-100' alt='Puzzle Generator Home Page Title'/>
            </Row>
            <Row className='m-3'>
                <Col>
                    <Row>
                        <h2 className='display-3'>Welcome to Word Search Craft!</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec interdum lacus. Quisque ut ipsum molestie, bibendum nisi eget, maximus sem. Aliquam eget posuere lacus. 
                            Suspendisse porttitor consectetur magna, eu pulvinar justo accumsan vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                            Nam sit amet blandit augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec eget mauris at dolor condimentum cursus sit amet ultrices leo. 
                            Sed quis orci placerat, auctor sem ultrices, placerat massa. Morbi vestibulum leo elit, sodales laoreet orci dapibus nec. Nulla eu eros quis lectus venenatis congue. 
                            Quisque finibus, purus dapibus tincidunt iaculis, quam lacus vestibulum eros, eget efficitur felis justo et enim. Integer non nibh placerat, pulvinar velit aliquet, faucibus erat.
                            Sed facilisis nisl quis pellentesque cursus. Curabitur gravida sapien efficitur ornare ultrices.

                        </p>
                    </Row>
                    <Row className='p-1 align-items-center'>
                        <PhotoCol className='p-3'>
                            <PuzzlePicture />
                        </PhotoCol>
                    </Row>
                    <Row>
                        <Accordion defaultActiveKey='0'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>
                                    Puzzle Generator
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col>
                                            Puzzle Generator Description and Features
                                        </Col>
                                        <Col>
                                            <img src="https://placehold.co/100x100.png" className='p-2 img-fluid' alt='Puzzle Generator Page Preview'/>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    View Topics
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col>
                                            View Topics Description and Features
                                        </Col>
                                        <Col>
                                            <img src="https://placehold.co/100x100.png" className='p-2 img-fluid' alt='View Topics Page Preview'/>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Create Topic
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row>
                                        <Col>
                                        </Col>
                                        <Col>
                                            <img src="https://placehold.co/100x100.png" className='p-2 img-fluid' alt='View Topics Page Preview'/>
                                        </Col>
                                    </Row>
                                    Create Topic Description and Features
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Row>
                    <Row className='flex-grow-1'>
                        <Col>
                            <Row>
                                <StyledMenuCol className=''>
                                    <MenuContainer />
                                </StyledMenuCol>
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