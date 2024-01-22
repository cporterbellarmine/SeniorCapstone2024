import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ButtonNavigation from './ButtonNavigation';
import { StyledMenuCol } from '../ComponentStyling';

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