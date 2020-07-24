import React from 'react';
import HeaderTop from '../HeaderTop';
import HeaderMain from '../HeaderMain';
const Header:React.FC = () => {
    return(
        <div className='header-wrapper'>
            <HeaderTop />
            <HeaderMain />
        </div>
    );
}
export default Header;