import React, {useState,useCallback} from 'react';
import './style.scss';
import BoxItemNewSong from '../BoxItemNewSong';

interface BoxListNewSong {
    arr :  Array<Object>
    start : number,
    end : number,
}


const BoxListNewSong:React.FC<BoxListNewSong> = (props) => {
    return(
        <div className='box-list-item-new-song-wrapper'>
            {
                props.arr.slice(props.start,props.end).map(function(item:any,index:any){
                    return <BoxItemNewSong  item={item} key={index}/>
                })
            }
        </div>
    );
}

export default BoxListNewSong;