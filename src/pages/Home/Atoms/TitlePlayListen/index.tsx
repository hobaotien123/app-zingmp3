// libs
import React from 'react';
// others
import './style.scss';

interface PropsTitlePlayListen {
    title : {
        titlePlayListen : string,
    }
}

const TitlePlayListen:React.FC<PropsTitlePlayListen> = (props) => {
    return(
    <h3>{props.title.titlePlayListen}</h3>
    );
}

export default TitlePlayListen;