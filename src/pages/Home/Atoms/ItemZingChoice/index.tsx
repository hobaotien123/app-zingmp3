// libs
import React from 'react';
// others
import './style.scss';
interface ItemZingChoice {
    item : {
        thumZingChoice : string
    }
}

const ItemZingChoice:React.FC<ItemZingChoice> = (props) => {
    return(
        <img src={props.item.thumZingChoice} />
    );
}
export default ItemZingChoice;