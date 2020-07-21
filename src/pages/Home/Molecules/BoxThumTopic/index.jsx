import React from 'react';
import './style.scss';
import ThumTopic from '../../Atoms/ThumTopic';
const BoxThumTopic = (props) => {
    return(
        <div className='box-thum-topic-wrapper'>
            {
                props.arr.listThumTopic.map(function(item,index){
                    return <ThumTopic item={item} key={index}/>
                })
            }
        </div>
    );
}

export default BoxThumTopic;