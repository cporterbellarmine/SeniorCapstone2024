// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import MenuContainer from '../../MenuContainer';
import CreateTopicButtonRouting from '../NavButtons/CreateTopic/CreateTopicButtonRouting';
import PuzzleGeneratorButtonRouting from '../NavButtons/PuzzleGenerator/PuzzleGeneratorButtonRouting';
import ViewTopicsButtonRouting from '../NavButtons/ViewTopics/ViewTopicsButtonRouting';
import LogoLargerBrandDarker from '../../../Images/LogoLargerBrandDarker.png';
import { StyledContainer, StyledMenuCol } from '../HomePageComponentStyle';
import './xs-css-id.css';

function HomePage() {
    return(
        <StyledContainer>
            <Row className=''>
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
                    <Row>
                        <Accordion flush defaultActiveKey='0' className='accordion'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header className='accordion-header-styling accordion-styling' >
                                    <h4>Puzzle Generator</h4>
                                </Accordion.Header>
                                <Accordion.Body className='d-flex'>
                                    <Row className='justify-content-between'>
                                        <Col className='col-7'>
                                            <Row>
                                                <h5>Puzzle Generator Description and Features</h5>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper mauris, eget tempor augue. Maecenas libero lacus, 
                                                sollicitudin sed auctor ac, cursus a magna. 
                                                Cras maximus mi nec nulla euismod, nec sodales dolor pretium. In hac habitasse platea dictumst. Nulla feugiat efficitur lacinia. 
                                                Praesent euismod libero eget urna cursus feugiat eu vitae urna. Etiam lorem arcu, ullamcorper in viverra at, fermentum nec nisl. 
                                                Nam facilisis purus quis augue volutpat, non imperdiet nisl rhoncus. Nulla dictum, justo at euismod vehicula, ligula erat interdum tortor, 
                                                a mollis mauris nulla ac erat. Suspendisse sit amet semper sapien.
                                            </Row>
                                            <Row className='justify-content-center'>
                                                <Col className='col-8'>
                                                    <PuzzleGeneratorButtonRouting />
                                                </Col>
                                                
                                            </Row>
                                            
                                        </Col>
                                        <Col className='col-2'>
                                            <img src="https://placehold.co/100x100.png" className='p-2 img-fluid photo-border' alt='Puzzle Generator Page Preview'/>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='1'>
                                <Accordion.Header className='accordion-header-styling'>
                                    <h4>View Topics</h4>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row className='justify-content-between'>
                                        <Col className='col-7'>
                                            <Row>
                                                <h5>View Topics Description and Features</h5>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper mauris, eget tempor augue. Maecenas libero lacus, 
                                                sollicitudin sed auctor ac, cursus a magna. 
                                                Cras maximus mi nec nulla euismod, nec sodales dolor pretium. In hac habitasse platea dictumst. Nulla feugiat efficitur lacinia. 
                                                Praesent euismod libero eget urna cursus feugiat eu vitae urna. Etiam lorem arcu, ullamcorper in viverra at, fermentum nec nisl. 
                                                Nam facilisis purus quis augue volutpat, non imperdiet nisl rhoncus. Nulla dictum, justo at euismod vehicula, ligula erat interdum tortor, 
                                                a mollis mauris nulla ac erat. Suspendisse sit amet semper sapien.
                                            </Row>
                                            <Row className='justify-content-center'>
                                                <Col className='col-8'>
                                                    <ViewTopicsButtonRouting />
                                                </Col>
                                            </Row>
                                            
                                        </Col>
                                        <Col className='col-2'>
                                            <img src="https://placehold.co/100x100.png" className='p-2 img-fluid' alt='View Topics Page Preview'/>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2'>
                                <Accordion.Header className='accordion-header-styling accordion-last-header-styling'>
                                    <h4>Create Topic</h4>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <Row className='justify-content-between'>
                                        <Col className='col-7'>
                                            <Row>
                                                <h5>Create Topic Description and Features</h5>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper mauris, eget tempor augue. Maecenas libero lacus, 
                                                sollicitudin sed auctor ac, cursus a magna. 
                                                Cras maximus mi nec nulla euismod, nec sodales dolor pretium. In hac habitasse platea dictumst. Nulla feugiat efficitur lacinia. 
                                                Praesent euismod libero eget urna cursus feugiat eu vitae urna. Etiam lorem arcu, ullamcorper in viverra at, fermentum nec nisl. 
                                                Nam facilisis purus quis augue volutpat, non imperdiet nisl rhoncus. Nulla dictum, justo at euismod vehicula, ligula erat interdum tortor, 
                                                a mollis mauris nulla ac erat. Suspendisse sit amet semper sapien.
                                            </Row>
                                            <Row className='justify-content-center'>
                                                <Col className='col-8'>
                                                    <CreateTopicButtonRouting />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col className='col-3 align-content-between'>
                                            <img src="https://placehold.co/100x100.png" className='p-2 img-fluid' alt='View Topics Page Preview'/>
                                        </Col>
                                    </Row>
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
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledContainer>
    );
}
export default HomePage;