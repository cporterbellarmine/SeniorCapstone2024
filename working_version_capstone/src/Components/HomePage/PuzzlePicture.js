// Used in /src/Pages/HomePage

import React from 'react';
import { PhotoSpot } from '../ComponentStyling';
import PlaceHolderImage from '../Images/wordsearchplaceholderphoto.png';

function PuzzlePicture() {
    return(
        <>
         <PhotoSpot className='d-flex'>
            <img src="https://placehold.co/500x300.png" className='p-2 img-fluid' alt='Word Search'/>
         </PhotoSpot > 
        </>
    );
};
export default PuzzlePicture;