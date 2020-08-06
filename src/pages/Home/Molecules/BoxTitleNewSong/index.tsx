// libs
import React from 'react';
// components
import TitleNewSong from '../../Atoms/TitleNewSong';
import SingerNewSong from '../../Atoms/SingerNewSong';
//others
import './style.scss';

interface PropsBoxTitleNewSong{
    item : {
        thumNewSong : string,
        titleSong : string,
        singerSong  : string,
    }
}

const BoxTitleNewSong:React.FC<PropsBoxTitleNewSong> = (props) => {
    return(
        <div className='box-title-new-song-wrapper'>
            <TitleNewSong item={props.item} />
            <SingerNewSong item={props.item} />
        </div>
    );
}

export default BoxTitleNewSong;