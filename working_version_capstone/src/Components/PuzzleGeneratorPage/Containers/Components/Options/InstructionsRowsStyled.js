import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const InstructionsRowTopStyled = styled(Row)`
    background-color: sandybrown;

    @media screen and (min-width: 768px){
        display: none;
    };

`;

export const InstructionsRowBottomStyled = styled(Row)`
    background-color: sandybrown;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

