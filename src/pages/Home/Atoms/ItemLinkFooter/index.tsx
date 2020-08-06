// libs
import React from 'react';
// other
import './style.scss';
interface PropsItemLinkFooter {
    item : string,
}

const ItemLinkFooter:React.FC<PropsItemLinkFooter> = (props) => {
    return(
        <p>{props.item}</p>
    );
}

export default ItemLinkFooter;