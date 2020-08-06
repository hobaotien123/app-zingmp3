// libs
import React from 'react';
// others
import './style.scss';
import logo from './logozing.png';
const LogoHeader:React.FC = () => {
    return(
        <img className='img-logo-wrapper' src={logo} alt='LogoZing'/>
    );
}
export default LogoHeader;