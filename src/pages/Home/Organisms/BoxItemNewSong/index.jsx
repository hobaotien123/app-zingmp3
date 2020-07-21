import React from 'react';
import './style.scss';
import ThumNewSong from '../../Atoms/ThumNewSong';
import BoxTitleNewSong from '../../Molecules/BoxTitleNewSong';
const BoxItemNewSong = (props) => {
    return(
        <div className='box-item-new-song-wrapper'>
            <ThumNewSong item={props.item} />
            <BoxTitleNewSong item={props.item} />
        </div>
    );
}

export default BoxItemNewSong;