import React from 'react';
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