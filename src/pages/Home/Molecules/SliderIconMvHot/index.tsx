// libs
import React from 'react';
// components
import IconNextMvHot from '../../Atoms/IconNextMvHot';
import IconPreMvHot from '../../Atoms/IconPreMvHot';
// others
import './style.scss';

const SliderIconMvHot = () => {
    return(
        <div className='slider-icon-mv-hot-wrapper'>
            <IconNextMvHot />
            <IconPreMvHot />
        </div>
    );
}

export default SliderIconMvHot;