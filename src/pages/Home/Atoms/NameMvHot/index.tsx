// libs
import React from 'react';
// others
import './style.scss';

interface PropsNameMvHot{
    item : {
        nameMvHot : string,
    }
}

const NameMvHot:React.FC<PropsNameMvHot> = (props) => {
     return(
        <h6>{props.item.nameMvHot}</h6>
    );
}

export default NameMvHot;