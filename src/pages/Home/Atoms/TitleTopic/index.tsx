// libs
import React from 'react';
// others
import './style.scss';
interface PropsTitleTopic{
    title : string,
}

const TitleTopic:React.FC<PropsTitleTopic> = (props) => {
    return(
        <h2>{props.title}</h2>
    );
}

export default TitleTopic;