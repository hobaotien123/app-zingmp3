// libs
import React from 'react';
// components
import TitleNewMusic from '../../Atoms/TitleNewMusic';
import SliderIconNewMusic from '../../Molecules/SliderIconNewMusic';
// others
import './style.scss';

interface PropsBoxTitleNewMusic{
    page : number,
    perPage : number,
    onChangeMusic : Function,
    arr : Array<Object>
}

const BoxTitleNewMusic:React.FC<PropsBoxTitleNewMusic> = (props) => {
    return(
        <div className='box-title-newmusic-wrapper'>
            <TitleNewMusic />
            <SliderIconNewMusic onChangeMusic={props.onChangeMusic} arr={props.arr} perPage={props.perPage} page={props.page} />
        </div>
    );
}

export default BoxTitleNewMusic;