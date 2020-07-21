import React from 'react';
import './style.scss';
import BoxItemNewSong from '../BoxItemNewSong';
const BoxListNewSong = (props) => {
    return(
        <div className='box-list-item-new-song-wrapper'>
            {
                props.arr.map(function(item,index){
                    return <BoxItemNewSong item={item} key={index}/>
                })
            }
        </div>
    );
}

export default BoxListNewSong;