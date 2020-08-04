import React from 'react';
import BoxThumTopic from '../../Molecules/BoxThumTopic';
import BoxTitleTopic from '../../Molecules/BoxTitleTopic';
import './style.scss';

interface PropsBoxTopic{
    arr : {
        titleTopic : string,
        listThumTopic : Array<Object>
    }
}

const BoxTopic:React.FC<PropsBoxTopic> = (props) => {
    return( 
        <div className='box-topic'>
            <BoxTitleTopic title={props.arr.titleTopic} />
            <BoxThumTopic arr={props.arr}/>
        </div>
    );
}
export default BoxTopic;