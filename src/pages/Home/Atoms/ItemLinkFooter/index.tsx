import React from 'react';

interface PropsItemLinkFooter {
    item : string,
}

const ItemLinkFooter:React.FC<PropsItemLinkFooter> = (props) => {
    return(
        <p>{props.item}</p>
    );
}

export default ItemLinkFooter;