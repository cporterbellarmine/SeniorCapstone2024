import React from 'react';
import NavButtonLinkObject from '../LinkObject/NavButtonLinkObject';


function NavLinkCreateTopic(){
    return(
        <NavButtonLinkObject displayName="/create-topic" buttonDisplayText={<center><b>Create Topic</b></center>}/>
    );
}
export default NavLinkCreateTopic;