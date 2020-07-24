import React from 'react';
import './style.scss';
import TitleNewMusic from '../../Atoms/TitleNewMusic';
import SliderIconNewMusic from '../../Molecules/SliderIconNewMusic';
const BoxTitleNewMusic:React.FC = () => {
    return(
        <div className='box-title-newmusic-wrapper'>
            <TitleNewMusic />
            <SliderIconNewMusic />
        </div>
    );
}

export default BoxTitleNewMusic;