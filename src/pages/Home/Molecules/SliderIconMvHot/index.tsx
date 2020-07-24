import React from 'react';
import './style.scss';
import IconNextMvHot from '../../Atoms/IconNextMvHot';
import IconPreMvHot from '../../Atoms/IconPreMvHot';

const SliderIconMvHot = () => {
    return(
        <div className='slider-icon-mv-hot-wrapper'>
            <IconNextMvHot />
            <IconPreMvHot />
        </div>
    );
}

export default SliderIconMvHot;