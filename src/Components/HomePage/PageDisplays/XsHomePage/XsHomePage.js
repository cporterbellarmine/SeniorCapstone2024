// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import MenuContainer from '../../MenuContainer';
import CreateTopicButtonRouting from '../NavButtons/CreateTopic/CreateTopicButtonRouting';
import PuzzleGeneratorButtonRouting from '../NavButtons/PuzzleGenerator/XsDisplay/Routing/XsPGButtonRouting';
import ViewTopicsButtonRouting from '../NavButtons/ViewTopics/ViewTopicsButtonRouting';
import XsPGButtonRouting from '../NavButtons/PuzzleGenerator/XsDisplay/Routing/XsPGButtonRouting';
import XsVTButtonRouting from '../NavButtons/ViewTopics/XsDisplay/Routing/XsVTButtonRouting';
import CreateTopicAccordionRouting from '../NavButtons/CreateTopic/CreateTopicAccordionRouting';
import XsPuzzleGeneratorAccordionRouting from '../NavButtons/PuzzleGenerator/XsPuzzleGeneratorAccordionRouting';
import XsViewTopicsAccordionRouting from '../NavButtons/ViewTopics/XsViewTopicsAccordionRouting';
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
                        <h4 className='title-h4'>Puzzle Generator Page</h4>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='col-4'/>
                <Col className='col-4'>
                    <XsPGButtonRouting />
                </Col>
                <Col className='col-4'/>
            </Row>
            <Row>
                <h5>Puzzle Generator Description and Features</h5>
                <p>
                    The Puzzle Generator allows you to choose the specifications of your puzzle
                    before generation. There are two dropdowns: Topic and Difficulty.
                </p>
                <p>
                    <b>Difficulty Requirements</b>
                    <ul>
                        <li>
                            <p><u>Easy</u>: There are 10 words between 3-5 letters associated with the chosen topic.</p>
                        </li>
                        <li>
                            <p><u>Intermediate</u>: There are 20 words between 3-10 letters associated with the chosen topic.</p>
                        </li>
                        <li>
                            <p><u>Hard</u>: There are 30 words between 3-15 letters associated with the chosen topic.</p>
                        </li>
                        <li>
                            <p><u>Expert</u>: There are 40 words between 3-15 letters associated with the chosen topic.</p>
                        </li>
                    </ul>
                </p>
            </Row>
            <Row className='vt-gradient-image-xs text-end'>
                <Col>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <h4 className='title-h4'>View Topics Page</h4>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className='col-4'/>
                <Col className='col-4'>
                    <XsVTButtonRouting />
                </Col>
                <Col className='col-4'/>
            </Row>
            <Row>
                <h5>View Topics Description and Features</h5>
                <p className='p-size'>
                    The View Topics page allows you to view what topics and words are available in the database.
                    Click on a specific topic to view the associated words.
                </p>
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