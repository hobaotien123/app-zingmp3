import React from 'react';
import './style.scss';
import BoxThumTopic from '../../Molecules/BoxThumTopic';
import TitleTopic from '../../Atoms/TitleTopic';
import IconTopic from '../../Atoms/IconTopic';
import BoxTitleTopic from '../../Molecules/BoxTitleTopic';
const BoxTopic = (props) => {
    return( 
        <div className='box-topic'>
            <BoxTitleTopic title={props.arr.titleTopic} />
            <BoxThumTopic arr={props.arr}/>
        </div>
    );
}
export default BoxTopic;