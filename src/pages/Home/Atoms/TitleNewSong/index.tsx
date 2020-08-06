// libs
import React from 'react';
//others
import './style.scss';

interface PropsTitleNewSong{
    item : {
        titleSong : string,
    }
}

const TitleNewSong:React.FC<PropsTitleNewSong> = (props) => {
    return(
    <h5>{props.item.titleSong}</h5>
    );
}

export default TitleNewSong;