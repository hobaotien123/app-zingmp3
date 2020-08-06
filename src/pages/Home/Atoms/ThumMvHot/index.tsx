// libs
import React from 'react';
// others
import './style.scss';

interface PropsThumMvHot{
    item : {
        thumMvHot : string,
    }
}

const ThumMvHot:React.FC<PropsThumMvHot> = (props) => {
    return(
        <img src={props.item.thumMvHot} />
    );
}

export default ThumMvHot;