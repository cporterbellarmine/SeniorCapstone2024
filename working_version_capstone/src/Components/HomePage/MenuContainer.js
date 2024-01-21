import React from 'react';
import { StyledMenuCol } from '../ComponentStyling';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonNavigation from './ButtonNavigation';

const MenuContainer = () => {
    return(
        <StyledMenuCol>
            <Row>
                <h1>Menu</h1>
            </Row>
            <Row>
                <ButtonNavigation />
            </Row>
        </StyledMenuCol>
            
    );
}
export default MenuContainer;