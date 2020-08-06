// libs
import React from 'react';
// components
import HeaderTop from '../HeaderTop';
import HeaderMain from '../HeaderMain';
// others
import './style.scss'
const Header:React.FC = () => {
    return(
        <div className='header-wrapper'>
            <HeaderTop />
            <HeaderMain />
        </div>
    );
}
export default Header;