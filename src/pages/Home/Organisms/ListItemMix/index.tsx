import React from 'react';
import './style.scss';
import MixInfo from '../../Molecules/MixInfo';
import MixList from '../../Molecules/MixList';

interface ListItemMix{
    arr : {
        mixInfo : { 
                    thumMix : string,
                    titleMix : string,
                    mixSub : string,
                    numberSongs : string,  
                  },
        mixList : Array<Object>,
    }
}

const ListItemMix:React.FC<ListItemMix> = (props) => {
    return(
        <div className='list-item-mix-wrapper'>
            <MixInfo info={props.arr} />
            <div className='list-right-mix-wrapper'>
            {
                props.arr.mixList.map((item:any,index:any) => {
                   return <MixList item={item} num={index+1} key={index}/>
                })
            }
            </div>
        </div>
    );
}

export default ListItemMix;