import React from 'react';
import { Route } from 'react-router-dom'

function ButtonRouteTemplate(props){
    return(
        <Route path={props.pathName} element={props.displayPage} />
    );
};
export default ButtonRouteTemplate;