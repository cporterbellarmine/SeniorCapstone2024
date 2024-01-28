import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from '../Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Dropdowns/TopicDropdown';
import { SubCol } from '../PreviewStyledComponents';

const OptionsContainer = () => {
    return(
        <Container>
            <SubCol>
                <Row>
                    <PreviewButtonRouting />
                </Row>
                <Row>
                    <Stack gap={2}>
                        <TopicDropdown />
                        <DifficultyDropdown />
                    </Stack>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2>Instructions</h2>
                        </Row>
                        <Row>
                            <div>
                                <ol>
                                    <li>
                                        <p>Step 1</p>
                                    </li>
                                    <li>
                                        <p>Step 2</p>
                                    </li>
                                    <li>
                                        <p>Step 3</p>
                                    </li>
                                </ol>
                            </div>
                            
                        </Row>
                    </Col>
                </Row>
            </SubCol>
        </Container>
    );
};
export default OptionsContainer;