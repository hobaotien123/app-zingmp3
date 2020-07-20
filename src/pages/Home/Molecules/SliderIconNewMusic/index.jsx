import React from 'react';
import './style.scss';
import IconNextNewMusic from '../../Atoms/IconNextNewMusic';
import IconPreNewMusic from '../../Atoms/IconPreNewMusic';
const SliderIconNewMusic = () => {
    return(
        <div className='slider-icon-newmusic-wrapper'>
            <IconNextNewMusic />
            <IconPreNewMusic />
        </div>
    );
}

export default SliderIconNewMusic;