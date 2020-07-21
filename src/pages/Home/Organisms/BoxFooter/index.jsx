import React from 'react';
import './style.scss';
import LogoFooter from '../../Atoms/LogoFooter';
import ListLinkFooter from '../../Molecules/ListLinkFooter';
import CoppyrightFooter from '../../Atoms/CoppyrightFooter';

const BoxFooter = () => {
    return(
        <div className='box-footer-wrapper'>
            <div className='flex-logo-coppy'>
                <LogoFooter />
                <CoppyrightFooter />
            </div>
            <ListLinkFooter />
        </div>
    );
}

export default BoxFooter;