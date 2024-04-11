// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import MenuContainer from '../../MenuContainer';
import CreateTopicButtonRouting from '../NavButtons/CreateTopic/CreateTopicButtonRouting';
import PuzzleGeneratorButtonRouting from '../NavButtons/PuzzleGenerator/PuzzleGeneratorButtonRouting';
import ViewTopicsButtonRouting from '../NavButtons/ViewTopics/ViewTopicsButtonRouting';
import FreeSearchLogo from '../../../Images/FreeSearchLogo.png';
import { StyledContainer, StyledMenuCol } from '../HomePageComponentStyle';
import './xs-css-id.css';

function HomePage() {
    return(
        <StyledContainer>
            <Row className='text-center'>
                <div>
                    <img src={FreeSearchLogo} className='p-2 img-fluid w-75' alt='Puzzle Generator Home Page Title'/>
                </div>
            </Row>
            <Row className='m-3'>
                <Col>
                    <Row>
                        <h2 className='display-3'><u>Welcome to FreeSearch!</u></h2>
        
                        <b>Creation of FreeSearch</b>
                         <p>
                            FreeSearch was created in Spring 2024 by Christina Porter, a graduating Senior from Bellarmine University as a final capstone project.
                            Word searches are a powerful and underutilized tool that can be used to enhance vocabulary and
                            assess impact in cognitive function with persistent usage. FreeSearch is a free word-search generator that uses provided topics and associated words
                            to generate a unique puzzle every render.
                        </p>
                        <br />

                            <b>Prior Experience to FreeSearch</b>
                        <p>
                            FreeSearch is a result of Christina's 10 week period to design, learn, create, and implement a full-stack application. 
                            Before FreeSearch, Christina had no experience with JavaScript, React, or MongoDB. 
                        </p>
                        <br />

                        <b>References</b>
                        <p>
                            Several references were used in the creation of this project
                            including official documentation, forums such as StackExchange, and tutorial sites such as W3Schools. A complete list can be found in the references page.
                            Personal shout-out to Victor, Brinda, Tyrone, Persephone, and Shanna for their input on user scenarios and artwork.
                        </p>
                        <br />

                        
                            <b>Future Implementation</b>
                        <p>
                            Upon further development, FreeSearch can be expanded to include functionality to edit, add, and remove topics and associated words. Eventually,
                            Artificial Intelligence would become an asset to allow automatically generated word searches based off vocabulary central around the main topic
                            of an article or other provided resource. Should FreeSearch opt to include interactive puzzle-solving solutions, results could be collected and
                            analyzed to monitor cognitive capabilities over time.
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