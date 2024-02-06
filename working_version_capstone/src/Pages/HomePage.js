// Used in /Components/Header/NavBarRouting

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MenuContainer from '../Components/HomePage/MenuContainer';
import PuzzlePicture from '../Components/HomePage/PuzzlePicture';
// import LogoSmaller from '../Components'
import XsHomePage from '../Components/HomePage/PageDisplays/XsHomePage';
// import { StyledContainer, StyledMenuCol, PhotoCol, XsTitleRow, MdTitleRow } from '../Components/HomePage/PageDisplays/HomePageComponentStyle';

function HomePage() {
    return(
        <>
            <XsHomePage/>
        </>
    );
}
export default HomePage;