import React from 'react';
import NavBarObject from './NavBarObject';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom";

function NavRouter(){
    return(
        <Router>
            <NavBarObject/>
        </Router>
    );
};


export default NavRouter;