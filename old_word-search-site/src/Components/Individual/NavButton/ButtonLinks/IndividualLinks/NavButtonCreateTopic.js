import React from 'react';
import NavButtonLinkObject from '../LinkObject/NavButtonLinkObject';


function NavButtonCreateTopic(){
    return(
        <NavButtonLinkObject displayName="/create-topic" buttonDisplayText={<center><b>Create Topic</b></center>}/>
    );
}
export default NavButtonCreateTopic;