import React from 'react';
import { StyledMenuCol } from '../ComponentStyling';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ButtonNavigation from './ButtonNavigation';

const MenuContainer = () => {
    return(
        <Container>
            <StyledMenuCol>
                <Row>
                    <h1>Menu</h1>
                </Row>
                <Row>
                    <ButtonNavigation />
                </Row>
            </StyledMenuCol>
        </Container>
       
            
    );
}
export default MenuContainer;