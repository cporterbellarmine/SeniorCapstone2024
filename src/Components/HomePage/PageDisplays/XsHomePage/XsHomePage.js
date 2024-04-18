// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import MenuContainer from '../../MenuContainer';
import CreateTopicButtonRouting from '../NavButtons/CreateTopic/CreateTopicButtonRouting';
import PuzzleGeneratorButtonRouting from '../NavButtons/PuzzleGenerator/XsPGButtonRouting';
import ViewTopicsButtonRouting from '../NavButtons/ViewTopics/ViewTopicsButtonRouting';
import XsPGButtonRouting from '../NavButtons/PuzzleGenerator/XsPGButtonRouting';
import XsVTButtonRouting from '../NavButtons/ViewTopics/XsVTButtonRouting';
import CreateTopicAccordionRouting from '../NavButtons/CreateTopic/CreateTopicAccordionRouting';
import XsPuzzleGeneratorAccordionRouting from '../NavButtons/PuzzleGenerator/XsPuzzleGeneratorAccordionRouting';
import XsViewTopicsAccordionRouting from '../NavButtons/ViewTopics/XsViewTopicsAccordionRouting';
import MainMenuRouting from '../NavButtons/MainMenu/XsMainMenuRouting';
import FreeSearchLogo from '../../../Images/FreeSearchLogo.png';
import Headshot from '../../../Images/headshot.png';
import Database from '../../../Images/DatabaseSmaller.png';
import TechGrid from '../../../Images/TechGrid.png';
import PreviewTopicsPage from '../../../Images/ViewTopicsPageHalfish.png';
import { StyledContainer, StyledMenuCol } from '../HomePageComponentStyle';
import { XsHomeContainer, CreationColTitle, ExperienceColTitle, FutureColTitle, CreationColGradient, ExperienceColGradient, FutureColGradient, TitleText, MenuHeader } from './XsStyledComponents';
import './xs-css-id.css';

/* Menu under title > Accordion > About */

function XsHomePage() {
    return(
        <XsHomeContainer>
            <Row className='text-center'>
                <div>
                    <img src={FreeSearchLogo} className='p-2 img-fluid w-75' alt='Puzzle Generator Home Page Title'/>
                </div>
            </Row>
            <Row>
                <h2 className='display-3'><u>Welcome to FreeSearch!</u></h2>
            </Row>
            <Row className='pg-gradient-image-xs'>
                <Col>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <h4>Puzzle Generator Page</h4>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='col-1'/>
                <Col className='col-8'>
                    <XsPGButtonRouting />
                </Col>
                <Col className='col-1'/>
            </Row>
            <Row className='vt-gradient-image-xs text-end'>
                <Col>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <h4>View Topics Page</h4>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='col-1'/>
                <Col className='col-8'>
                    <XsVTButtonRouting />
                </Col>
                <Col className='col-1'/>
            </Row>




            <Row className=''>
                <Col className='p-0'>
                    <Accordion flush className='accordion'>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header className='accordion-header-styling accordion-styling' >
                                <Col className='col-5'>
                                    <h4>Puzzle Generator</h4>
                                </Col>
                                <Col className='col-2'/>
                                <Col className='col-4'>
                                    <XsPuzzleGeneratorAccordionRouting />
                                </Col>
                            </Accordion.Header>
                            <Accordion.Body className='d-flex'>
                                <Row className='justify-content-between'>
                                    <Col className='col-7'>
                                        <Row>
                                            <h5>Puzzle Generator Description and Features</h5>
                                            <p>
                                                The Puzzle Generator allows you to choose the specifications of your puzzle before generation. There are two dropdowns: Topic and Difficulty.
                                                Available topics are retrieved from the database and shown under the topics dropdown. Once a topic is populated,
                                                you will be able to click on the difficulty dropdown, which automatically populates only difficulties that are available for that topic.
                                            </p>
                                            <p>
                                                <b>Difficulty Requirements</b>
                                            </p>   
                                            
                                            <ul>
                                                <li>
                                                   <p><u>Easy</u>: There are 10 words between 3-5 letters. This generates a 8x8 grid.</p>
                                                </li>
                                                <li>
                                                    <p><u>Intermediate</u>: There are 20 words between 3-10 letters. This generates a 15x15 grid.</p>
                                                </li>
                                                <li>
                                                    <p><u>Hard</u>: There are 30 words between 3-15 letters. This generates a 23x23 grid.</p>
                                                </li>
                                                <li>
                                                   <p><u>Expert</u>: There are 40 words between 3-15 letters. This generates a 23x23 grid.</p>
                                                </li>
                                            </ul>

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
                                <Col className='col-5'>
                                    <h4>View Topics</h4>
                                </Col>
                                <Col className='col-2'/>
                                <Col className='col-4'>
                                    <XsViewTopicsAccordionRouting />
                                </Col>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Row className='justify-content-between'>
                                    <Col className='col-6'>
                                        <Row>
                                            <h5>View Topics Description and Features</h5>
                                            <p>
                                                The View Topics page allows you to view what topics and words are available in the database.
                                                Current available topics will automatically display on the left. The words associated with each
                                                topic will display on the right when a topic is clicked.
                                            </p>
                                        </Row>
                                        <Row className='justify-content-center'>
                                            <Col className='col-8'>
                                                <ViewTopicsButtonRouting />
                                            </Col>
                                        </Row>
                                        
                                    </Col>
                                    <Col className='col-6 align-content-center text-center'>
                                        <img src={PreviewTopicsPage} className='p-2' alt='View Topics Page Preview'/>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
            <Row className='mt-5'>
                <h3><u>About FreeSearch</u></h3>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <CreationColTitle className='py-3 px-2 col-8'>
                            <TitleText>
                                <h5><b>Creation of FreeSearch</b></h5>
                            </TitleText>
                        </CreationColTitle>
                        <CreationColGradient className='col-4'>
                            <br />
                        </CreationColGradient>
                    </Row>
                    <Row className='py-2'>
                        <Col>
                            <Row>
                                <p>
                                    FreeSearch was created in Spring 2024 by Christina Porter, a graduating Senior from Bellarmine University as a final capstone project.
                                    Word searches are a powerful and underutilized tool that can be used to enhance vocabulary and
                                    assess impact in cognitive function with persistent usage. FreeSearch is a free word-search generator that uses provided topics and associated words
                                    to generate a unique puzzle every render.
                                </p>
                            </Row>
                            <Row>
                                <Col className='col-2'/>
                                <Col className='col-8 text-center'>
                                   <img src={Headshot} alt='Headshot of Christina' />
                                </Col>
                                <Col className='col-2'/>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <ExperienceColGradient className='col-4'>
                            <br />
                        </ExperienceColGradient>
                        <ExperienceColTitle className='py-3 px-2 col-8 text-end'>
                            <TitleText>
                                <h5><b>FreeSearch Learning Process</b></h5>
                            </TitleText>
                        </ExperienceColTitle>
                    </Row>
                    <Row className='py-2'>
                        <Col>
                            <Row>
                                <Col className='col-2'/>
                                <Col className='col-8 text-center'>
                                    <img src={Database} alt='Database Infrastructure' />
                                </Col>
                                <Col className='col-2'/>
                                
                            </Row>
                            <Row>
                                <p>
                                    There was 10 week period to design, create, and implement a full-stack application. 
                                    Before FreeSearch, Christina had no experience with JavaScript, React, or MongoDB. Using
                                    previous experience with Java and C#, there were no issues with picking up the skills
                                    needed to implement FreeSearch. 
                                </p>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <FutureColTitle className='py-3 px-2 col-8'>
                            <TitleText>
                                <b>Future Implementation</b>
                            </TitleText>
                        </FutureColTitle>
                        <FutureColGradient className='col-4'>
                            <br />
                        </FutureColGradient>
                    </Row>                
                    <Row className='py-2'>
                        <Col>
                            <Row>
                                 <p>
                                    Upon further development, FreeSearch can be expanded to include functionality to edit, add, and remove topics and associated words. Eventually,
                                    Artificial Intelligence would become an asset to allow automatically generated word searches based off vocabulary central around the main topic
                                    of an article or other provided resource. Should FreeSearch opt to include interactive puzzle-solving solutions, results could be collected and
                                    analyzed to monitor cognitive capabilities over time.
                                </p>
                            </Row>
                            <Row>
                                <Col className='col-2'/>
                                <Col className='col-8 text-center'>
                                    <img src={TechGrid} alt='techy-looking blue grid with dots connecting lines'/>
                                </Col>
                                <Col className='col-2'/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </XsHomeContainer>
    );
}
export default XsHomePage;