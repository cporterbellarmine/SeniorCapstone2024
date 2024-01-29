import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from '../Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Dropdowns/TopicDropdown';
import InstructionsRowXs from './Components/Options/XSComponents/InstructionsRowXs';
import InstructionsRowMd from './Components/Options/MedComponents/InstructionsRowMd';
import { SubCol } from './PreviewStyledComponents';

const OptionsContainer = () => {
    return(
        <Container>
            <Row>
                <SubCol>
                    <Row>
                        <PreviewButtonRouting />
                    </Row>
                    <InstructionsRowXs />
                    <Row className='order-3 py-4'>
                        <Stack gap={2}>
                            <TopicDropdown />
                            <DifficultyDropdown />
                        </Stack>
                    </Row>
                    <InstructionsRowMd />
                </SubCol>
            </Row>
            
        </Container>
    );
};
export default OptionsContainer;