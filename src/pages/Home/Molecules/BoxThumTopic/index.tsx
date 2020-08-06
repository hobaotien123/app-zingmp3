// libs
import React from 'react';
// components
import ThumTopic from '../../Atoms/ThumTopic';
// other
import './style.scss';

interface PropsBoxThumTopic{
    arr : {
        listThumTopic : Array<Object>,
    }
}

const BoxThumTopic:React.FC<PropsBoxThumTopic> = (props) => {
    return(
        <div className='box-thum-topic-wrapper'>
            {
                props.arr.listThumTopic.map(function(item:any,index:any){
                    return <ThumTopic item={item} key={index}/>
                })
            }
        </div>
    );
}

export default BoxThumTopic;