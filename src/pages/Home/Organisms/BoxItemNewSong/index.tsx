// libs
import React from 'react';
// components
import ThumNewSong from '../../Atoms/ThumNewSong';
import BoxTitleNewSong from '../../Molecules/BoxTitleNewSong';
// others
import './style.scss';

interface PropsBoxItemNewSong{
    item : {
        thumNewSong : string,
        titleSong : string,
        singerSong : string,
    }
}

const BoxItemNewSong:React.FC<PropsBoxItemNewSong>= (props) => {
    return(
        <div className='box-item-new-song-wrapper' >
            <ThumNewSong item={props.item} />
            <BoxTitleNewSong  item={props.item} />
        </div>
    );
}

export default BoxItemNewSong;