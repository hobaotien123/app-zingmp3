import React from 'react';
import './style.scss';

interface SingerNewSong{
    item : {
        singerSong : string,
    }
}

const SingerNewSong:React.FC<SingerNewSong> = (props) => {
    return(
    <p>{props.item.singerSong}</p>
    );
}

export default SingerNewSong;