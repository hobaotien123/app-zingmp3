import React from 'react';
import './style.scss';

interface PropsThumNewSong{
    item : {
        thumNewSong : string,
    }
}

const ThumNewSong:React.FC<PropsThumNewSong> = (props) => {
    return(
        <img src={props.item.thumNewSong} />
    );
}

export default ThumNewSong;