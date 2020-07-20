import React from 'react';
import './style.scss';
import ThumNewSong from '../../Atoms/ThumNewSong';
import BoxTitleNewSong from '../../Molecules/BoxTitleNewSong';
const BoxListNewSong = (props) => {
    const { item } = props
    return(
        <div className='box-item-new-song-wrapper'>
            <ThumNewSong item={item} />
            <BoxTitleNewSong item={item} />
        </div>
    );
}

export default BoxListNewSong;