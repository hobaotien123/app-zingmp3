import React from 'react';
import './style.scss';

interface PropsThumTopic{
    item : {
        thumTopic : string,
    }
}

const ThumTopic:React.FC<PropsThumTopic> = (props) => {
    return(
        <img src={props.item.thumTopic} />
    );
}
export default ThumTopic;