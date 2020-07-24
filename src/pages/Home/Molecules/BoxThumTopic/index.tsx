import React from 'react';
import './style.scss';
import ThumTopic from '../../Atoms/ThumTopic';

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