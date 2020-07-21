import React from 'react';
import './style.scss';
import TitleMvHot from '../../Atoms/TitileMvHot';
import SliderIconMvHot from '../../Molecules/SliderIconMvHot';

const BoxMvHot = () => {
    return(
        <div className='box-mv-hot-wrapper'>
            <TitleMvHot />
            <SliderIconMvHot />
        </div>
    );
}

export default BoxMvHot;