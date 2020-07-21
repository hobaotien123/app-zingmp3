import React from 'react';
import './style.scss';

const TitleNewSong = (props) => {
    return(
    <h5>{props.item.titleSong}</h5>
    );
}

export default TitleNewSong;