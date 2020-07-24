import React from 'react';
import './style.scss';
import BoxItemNewSong from '../BoxItemNewSong';

interface BoxListNewSong {
    arr :  Array<Object>
}

const BoxListNewSong:React.FC<BoxListNewSong> = (props) => {
    return(
        <div className='box-list-item-new-song-wrapper'>
            {
                props.arr.map(function(item:any,index:any){
                    return <BoxItemNewSong item={item} key={index}/>
                })
            }
        </div>
    );
}

export default BoxListNewSong;