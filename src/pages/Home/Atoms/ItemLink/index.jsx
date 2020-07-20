import React from 'react';
import classNames from 'classnames';

import './style.scss';

const ItemLink = (props) => {
    return(
    <a className={classNames( { isVip : props.item.isVip } )} href='#'>{props.item.title}</a>
    );
}
export default ItemLink;