// libs
import React from 'react';
import classNames from 'classnames';
// others
import './style.scss';

interface PropsItemLink{
    item : { title : string, isVip : boolean},
}

const ItemLink:React.FC<PropsItemLink> = (props) => {
    return(
    <a className={classNames( 'item-link-wrapper', { isVip : props.item.isVip } )} href='#'>{props.item.title}</a>
    );
}
export default ItemLink;