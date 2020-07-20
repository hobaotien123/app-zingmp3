import React from 'react';
import './style.scss';

const ItemTopicTop = (props) => {
let { item } = props;
    return(
            <div className='itemTopicTop'>
                <img src={item.thumMusic} />
                <h4>{item.titleMusic}</h4>
                <span>{item.singerMusic}</span>
            </div>
    );
}
export default ItemTopicTop;