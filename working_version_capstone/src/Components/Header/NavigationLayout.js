import React from 'react';
import {Outlet} from 'react-router-dom';
import NavigationLink from '../Individual/Buttons/NavigationLink';


const Layout = () => {
    return(
        <React.Fragment>
            <nav>
                <ul>
                    <li>
                        <NavigationLink pathway='/' textDisplyed='Home'/>
                    </li>
                    <li>
                        <NavigationLink pathway='/puzzle-generator' textDisplayed='Puzzle Generator'/>
                    </li>
                    <li>
                        <NavigationLink pathway='/view-topics' textDisplayed='View Topics'/>
                    </li>
                    <li>
                        <NavigationLink pathway='/create-topic' textDisplayed='Create Topic'/>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
}
export default Layout;