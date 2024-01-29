import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const InstructionsRowXsStyled = styled(Row)`
    background-color: sandybrown;

    @media screen and (min-width: 768px){
        display: none;
    };

`;

export const InstructionsRowMdStyled = styled(Row)`
    background-color: sandybrown;
    
    @media screen and (max-width: 768px){
        display: none;
    }
`;

