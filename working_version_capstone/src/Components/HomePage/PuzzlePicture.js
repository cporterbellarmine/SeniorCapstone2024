import React from 'react';
import { PhotoSpot } from '../ComponentStyling';
import PlaceHolderImage from '../Images/wordsearchplaceholderphoto.png';

function PuzzlePicture() {
    return(
        <>
         <PhotoSpot className='d-flex'>
            {/* <h3>PhotoHere</h3> */}
            <img src={PlaceHolderImage} className='p-2 img-fluid' alt='Word Search'/>
         </PhotoSpot > 
        </>
    );
};
export default PuzzlePicture;