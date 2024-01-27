import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from './Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from './Dropdowns/DifficultyDropdown';
import TopicDropdown from './Dropdowns/TopicDropdown';

const OptionsContainer = () => {
    return(
        <Container>
            <Col>
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
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
};
export default OptionsContainer;