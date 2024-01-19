import React from 'react';
import {Link} from 'react-router-dom';

function NavigationLink(props){
    return(
        <Link to={props.pathway}>{props.textDisplayed}</Link>
    );
}
export default NavigationLink;