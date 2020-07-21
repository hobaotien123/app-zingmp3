import React from 'react';
import HeaderTop from '../HeaderTop';
import HeaderMain from '../HeaderMain';
function Header(params) {
    return(
        <div className='header-wrapper'>
            <HeaderTop />
            <HeaderMain />
        </div>
    );
}
export default Header;