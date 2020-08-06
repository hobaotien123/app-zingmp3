// libs
import React from 'react';
// components
import TitleMvHot from '../../Atoms/TitileMvHot';
import SliderIconMvHot from '../../Molecules/SliderIconMvHot';
// others
import './style.scss';

const BoxMvHot = () => {
    return(
        <div className='box-mv-hot-wrapper'>
            <TitleMvHot />
            <SliderIconMvHot />
        </div>
    );
}

export default BoxMvHot;