// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import MenuContainer from '../../MenuContainer';
import MdMainMenu from './MdMainMenu';
import CreateTopicButtonRouting from '../NavButtons/CreateTopic/CreateTopicButtonRouting';
import PuzzleGeneratorButtonRouting from '../NavButtons/PuzzleGenerator/PuzzleGeneratorButtonRouting';
import ViewTopicsButtonRouting from '../NavButtons/ViewTopics/ViewTopicsButtonRouting';
import CreateTopicAccordionRouting from '../NavButtons/CreateTopic/CreateTopicAccordionRouting';
import PuzzleGeneratorAccordionRouting from '../NavButtons/PuzzleGenerator/XsPuzzleGeneratorAccordionRouting';
import ViewTopicsAccordionRouting from '../NavButtons/ViewTopics/XsViewTopicsAccordionRouting';
import MainMenuRouting from '../NavButtons/MainMenu/XsMainMenuRouting';
import FreeSearchLogo from '../../../Images/FreeSearchLogo.png';
import Headshot from '../../../Images/headshot.png';
import Database from '../../../Images/DatabaseSmaller.png';
import TechGrid from '../../../Images/TechGrid.png';
import PreviewTopicsPage from '../../../Images/ViewTopicsPageHalfish.png';
import { StyledContainer, StyledMenuCol } from '../HomePageComponentStyle';
import { MdHomeContainer, CreationColTitle, ExperienceColTitle, FutureColTitle, CreationColGradient, ExperienceColGradient, FutureColGradient, TitleText, MenuHeader } from './MdStyledComponents';
//import './xs-css-id.css';

/* Menu under title > Accordion > About */

function MdHomePage() {
    return(
        <MdHomeContainer>
            <Row className='text-center'>
                <div>
                    <img src={FreeSearchLogo} className='p-2 img-fluid w-75' alt='Puzzle Generator Home Page Title'/>
                </div>
            </Row>
            <Row>
                <h2 className='display-3'><u>Welcome to FreeSearch!</u></h2>
            </Row>
            <Row>
                <MdMainMenu />
            </Row>
            
            <Row className='mt-5'>
                <h3><u>About FreeSearch</u></h3>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <CreationColTitle className='py-3 px-2 col-8'>
                            <TitleText>
                                <b>Creation of FreeSearch</b>
                            </TitleText>
                        </CreationColTitle>
                        <CreationColGradient className='col-4'>
                            <br />
                        </CreationColGradient>
                    </Row>
                    <Row className='py-2'>
                        <Col className='col-8'>
                            <p>
                                FreeSearch was created in Spring 2024 by Christina Porter, a graduating Senior from Bellarmine University as a final capstone project.
                                Word searches are a powerful and underutilized tool that can be used to enhance vocabulary and
                                assess impact in cognitive function with persistent usage. FreeSearch is a free word-search generator that uses provided topics and associated words
                                to generate a unique puzzle every render.
                            </p>
                        </Col>
                        <Col className='col-4'>
                            <img src={Headshot} alt='Headshot of Christina' />
                        </Col>
                    </Row>
                    <Row>
                        <ExperienceColGradient className='col-4'>
                            <br />
                        </ExperienceColGradient>
                        <ExperienceColTitle className='py-3 px-2 col-8 text-end'>
                            <TitleText>
                                <b>FreeSearch Learning Process</b>
                            </TitleText>
                        </ExperienceColTitle>
                    </Row>
                    <Row className='py-2'>
                        <Col className='col-6'>
                            <img src={Database} alt='Database Infrastructure' />
                        </Col>
                        <Col className='col-6'>
                            <p>
                                There was 10 week period to design, create, and implement a full-stack application. 
                                Before FreeSearch, Christina had no experience with JavaScript, React, or MongoDB. Using
                                previous experience with Java and C#, there were no issues with picking up the skills
                                needed to implement FreeSearch. 
                            </p>
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
                        <Col className='col-7'>
                            <p>
                                Upon further development, FreeSearch can be expanded to include functionality to edit, add, and remove topics and associated words. Eventually,
                                Artificial Intelligence would become an asset to allow automatically generated word searches based off vocabulary central around the main topic
                                of an article or other provided resource. Should FreeSearch opt to include interactive puzzle-solving solutions, results could be collected and
                                analyzed to monitor cognitive capabilities over time.
                            </p>
                        </Col>
                        <Col className='col-5'>
                            <img src={TechGrid} alt='techy-looking blue grid with dots connecting lines' />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </MdHomeContainer>
    );
}
export default MdHomePage;