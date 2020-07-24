import React from 'react';
import './style.scss';
import BoxThumTopic from '../../Molecules/BoxThumTopic';
import TitleTopic from '../../Atoms/TitleTopic';
import IconTopic from '../../Atoms/IconTopic';
import BoxTitleTopic from '../../Molecules/BoxTitleTopic';

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