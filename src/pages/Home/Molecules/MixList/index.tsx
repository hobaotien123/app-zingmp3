import React from 'react';
import './style.scss'

interface MixList{
    item : {
        stt : string,
        nameSong : string,
    },
    num : number,
}

const MixList:React.FC<MixList> = (props) => {
    return(
        <div className='mix-list-item-wrapper'>
            <p>{props.num}</p>
            <span>{props.item.nameSong}</span>
        </div>
    );
}
export default MixList;