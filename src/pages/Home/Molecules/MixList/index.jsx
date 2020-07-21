import React from 'react';
import './style.scss'

const MixList = (props) => {
    return(
        <div className='mix-list-item-wrapper'>
            <p>{props.item.stt}</p>
            <span>{props.item.nameSong}</span>
        </div>
    );
}
export default MixList;