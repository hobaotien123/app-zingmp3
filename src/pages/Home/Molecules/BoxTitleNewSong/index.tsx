import React from 'react';
import './style.scss';
import TitleNewSong from '../../Atoms/TitleNewSong';
import SingerNewSong from '../../Atoms/SingerNewSong';

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