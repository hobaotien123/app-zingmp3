import React from 'react';

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