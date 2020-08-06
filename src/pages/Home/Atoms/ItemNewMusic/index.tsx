//libs
import React from 'react';
//others
import './style.scss'

interface ItemNewMusic{
    item : {
        thumItemNewMusic : string,
    }
}

const ItemNewMusic:React.FC<ItemNewMusic> = (props) => {
    return(
        <img src={props.item.thumItemNewMusic}/>
    );
}

export default ItemNewMusic;