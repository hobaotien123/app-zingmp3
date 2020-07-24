import React from 'react';
import IconTopic from '../../Atoms/IconTopic';
import TitleTopic from '../../Atoms/TitleTopic';
import './style.scss';

interface PropsBoxTitleTopic{
    title : string,
}

const BoxTitleTopic:React.FC<PropsBoxTitleTopic> = (props) => {
    return(
        <div className='box-title-topic-wrapper'>
            <TitleTopic title={props.title} />
            <IconTopic />
        </div>
    );
}

export default BoxTitleTopic;