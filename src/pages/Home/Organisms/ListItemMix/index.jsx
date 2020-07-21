import React from 'react';
import './style.scss';
import MixInfo from '../../Molecules/MixInfo';
import MixList from '../../Molecules/MixList';

const ListItemMix = (props) => {
    return(
        <div className='list-item-mix-wrapper'>
            <MixInfo info={props.arr} />
            <div className='list-right-mix-wrapper'>
            {
                props.arr.mixList.map((item,index) => {
                   return <MixList item={item} key={index}/>
                })
            }
            </div>
        </div>
    );
}

export default ListItemMix;