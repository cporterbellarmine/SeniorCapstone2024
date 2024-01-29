import React from 'react';
import { StyledStackXsRow } from '../SizedPreviewStyles';
import Stack from 'react-bootstrap/Stack';
import DifficultyDropdown from '../../../../Dropdowns/DifficultyDropdown';
import TopicDropdown from '../../../../Dropdowns/TopicDropdown';

const XsFunctionButtonsStack = () => {
    return(
        <StyledStackXsRow className='order-3 py-4'>
            <Stack gap={2}>
                <TopicDropdown />
                <DifficultyDropdown />
            </Stack>
        </StyledStackXsRow>
    );
};
export default XsFunctionButtonsStack;