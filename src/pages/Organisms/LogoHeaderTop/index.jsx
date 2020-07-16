import React from 'react';
import './style.scss';
import logo from './logozing.png';
const LogoHeader = () => {
    return(
        <img className='imglogo' src={logo} alt='LogoZing'/>
    );
}
export default LogoHeader;