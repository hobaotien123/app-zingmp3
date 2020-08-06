// libs
import React from 'react';
// others
import './style.scss';
import iconThumTopic from '../../images/next.png';

const IconTopic:React.FC = () => {
    return(
        <div className='icon-topic-wrapper'>
            <img src={iconThumTopic}/>
        </div>
    );
}

export default IconTopic;