import React from 'react';
import './style.scss';
const SingerNewSong = (props) => {
    return(
    <p>{props.item.singerSong}</p>
    );
}

export default SingerNewSong;