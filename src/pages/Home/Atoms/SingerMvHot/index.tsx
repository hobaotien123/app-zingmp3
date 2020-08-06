// libs
import React from 'react';
// others
import './style.scss';

interface PropsSingerMvHot{
    item : {
        singerMvHot : string,
    }
}

const SingerMvHot:React.FC<PropsSingerMvHot> = (props) => {
     return(
     <p>{props.item.singerMvHot}</p>
    );
}

export default SingerMvHot;